import React, { useEffect, useState } from "react";
import "../css/Banner.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, selectOriginals } from "../redux/movieSlice";
import ClipLoader from "react-spinners/ClipLoader";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner({ category, fetchUrl }) {
  const dispatch = useDispatch();
  const originals = useSelector(selectOriginals);

  useEffect(() => {
    dispatch(fetchMovies(fetchUrl));
  }, [dispatch, fetchUrl]);

  let content;
  if (originals.status === "pending") {
    content = (
      <div className="clipLoaderContainer">
        <ClipLoader color="#FF0000" loading={true} size={150} />
      </div>
    );
  } else if (originals.status === "succeeded") {
    const movie = originals.movies[Math.floor(Math.random() * 19)];
    content = (
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('${
            movie.backdrop_path ? base_url + movie.backdrop_path : ""
          }')`,
          backgroundPosition: "top center",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.name || movie?.title || movie?.orginal_name}
          </h1>
          <p className="banner__description">{movie?.overview}</p>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">More Info</button>
          </div>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    );
  } else if (originals.status === "failed") {
    content = <div>Error</div>;
  }
  return <div>{content}</div>;
}

export default Banner;
