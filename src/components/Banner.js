import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import requests from "../utils/requests";
import "../css/Banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchMovie();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "fill",
        backgroundImage: `url('${base_url}${movie?.backdrop_path}')`,
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
}

export default Banner;
