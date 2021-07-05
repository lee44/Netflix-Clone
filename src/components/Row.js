import React, { useState, useEffect } from "react";
import "../css/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import { useSelector, useDispatch } from "react-redux";
import { selectTrending, fetchMovies } from "../redux/movieSlice";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const dispatch = useDispatch();
  const movies = useSelector(selectTrending);
  const moviesStatus = useSelector((state) => state.movie.trending.status);
  const [trailerUrl, setTrailerUrl] = useState("");

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
