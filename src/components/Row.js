import React, { useState, useEffect } from "react";
import "../css/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMovies,
  selectTrending,
  selectTopRated,
  selectAction,
  selectComedy,
  selectHorror,
  selectRomance,
  selectDocumentary,
  selectTrendingStatus,
  selectTopRatedStatus,
  selectActionStatus,
  selectComedyStatus,
  selectHorrorStatus,
  selectRomanceStatus,
  selectDocumentaryStatus,
} from "../redux/movieSlice";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const dispatch = useDispatch();
  const [trailerUrl, setTrailerUrl] = useState("");

  let selector, selectorStatus;
  switch (title) {
    case "Trending":
      selector = selectTrending;
      selectorStatus = selectTrendingStatus;
      break;
    case "Top Rated":
      selector = selectTopRated;
      selectorStatus = selectTopRatedStatus;
      break;
    case "Action":
      selector = selectAction;
      selectorStatus = selectActionStatus;
      break;
    case "Comedy":
      selector = selectComedy;
      selectorStatus = selectComedyStatus;
      break;
    case "Horror":
      selector = selectHorror;
      selectorStatus = selectHorrorStatus;
      break;
    case "Romance":
      selector = selectRomance;
      selectorStatus = selectRomanceStatus;
      break;
    case "Documentary":
      selector = selectDocumentary;
      selectorStatus = selectDocumentaryStatus;
      break;
  }
  const movies = useSelector(selector);
  const moviesStatus = useSelector(selectorStatus);

  useEffect(() => {
    dispatch(fetchMovies(fetchUrl));
  }, [dispatch, fetchUrl]);

  const youtubeOpts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const movieClicked = (moviename) => {
    if (trailerUrl) setTrailerUrl("");
    else {
      movieTrailer(moviename)
        .then((url) => {
          const urlParamV = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParamV.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  let content;
  if (moviesStatus === "pending") {
    content = (
      <div className="clipLoaderContainer">
        <ClipLoader color="#FF0000" loading={true} size={150} />
      </div>
    );
  } else if (moviesStatus === "succeeded") {
    {
      content = movies.map((movie) => (
        <img
          onClick={() =>
            movieClicked(movie.name || movie.title || movie.orginal_name)
          }
          key={movie.id}
          className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          src={`${base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.name}
        />
      ));
    }
  } else if (moviesStatus === "failed") {
    content = <div>Error</div>;
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">{content}</div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={youtubeOpts} />}
    </div>
  );
}

export default Row;
