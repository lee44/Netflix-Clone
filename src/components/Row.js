import React, { useState, useEffect } from "react";
import "../css/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, selectAll } from "../redux/movieSlice";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ category, fetchUrl, isLargeRow }) {
  const dispatch = useDispatch();
  const [trailerUrl, setTrailerUrl] = useState("");

  const allMovies = useSelector(selectAll);
  const movies = allMovies[category].movies;
  const moviesStatus = allMovies[category].status;

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
      <h2>{category.toUpperCase()}</h2>
      <div className="row__posters">{content}</div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={youtubeOpts} />}
    </div>
  );
}

export default Row;
