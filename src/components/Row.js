import React, { useState, useEffect } from "react";
import "../css/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import requests from "../utils/requests";

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

  const movies = getSelector(title);

  function getSelector(title) {
    switch (title) {
      case "Trending":
        return useSelector(selectTrending);
      case "Top Rated":
        return useSelector(selectTopRated);
      case "Action":
        return useSelector(selectAction);
      case "Comedy":
        return useSelector(selectComedy);
      case "Horror":
        return useSelector(selectHorror);
      case "Documentary":
        return useSelector(selectDocumentary);
    }
  }
  const moviesStatus = getSelectorStatus(title);
  function getSelectorStatus(title) {
    switch (title) {
      case "Trending":
        return useSelector(selectTrendingStatus);
      case "Top Rated":
        return useSelector(selectTopRatedStatus);
      case "Action":
        return useSelector(selectActionStatus);
      case "Comedy":
        return useSelector(selectComedyStatus);
      case "Horror":
        return useSelector(selectHorrorStatus);
      case "Documentary":
        return useSelector(selectDocumentaryStatus);
    }
  }

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
  if (moviesStatus === "loading") {
    content = <div className="loader">Loading...</div>;
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
