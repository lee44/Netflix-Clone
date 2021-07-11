import React from "react";
import "../css/MovieExplorer.css";
import genres from "../utils/genres";
import {
  FaPlay,
  FaPlus,
  FaThumbsUp,
  FaThumbsDown,
  FaChevronDown,
} from "react-icons/fa";

const base_url = "https://image.tmdb.org/t/p/original/";
// Nested destructuring
const MovieExplorer = ({
  movieExplorer: { show, movie, event },
  setMovieExplorer,
}) => {
  return (
    <div
      className={`${show ? "show explorer-container" : " explorer-container"}`}
      onMouseLeave={() => {
        setMovieExplorer({ show: false, movie: null, event: null });
      }}
      style={{ left: `${event.target.getBoundingClientRect().left - 35}px` }}
    >
      <img
        className="cardExplorer"
        src={`${movie.backdrop_path ? base_url + movie.backdrop_path : ""}`}
        alt={movie.name}
      />
      <div className="footer">
        <h5 style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
          {movie.title}
        </h5>
        <div className="button-container">
          <div className="icon-container">
            <span className="icon-circle">
              <FaPlay className="icons"></FaPlay>
            </span>
          </div>
          <div className="icon-container">
            <span className="icon-circle">
              <FaPlus className="icons"></FaPlus>
            </span>
          </div>
          <div className="icon-container">
            <span className="icon-circle">
              <FaThumbsUp className="icons"></FaThumbsUp>
            </span>
          </div>
          <div className="icon-container">
            <span className="icon-circle">
              <FaThumbsDown className="icons"></FaThumbsDown>
            </span>
          </div>
          <div
            className="icon-container"
            style={{ flexGrow: "1", textAlign: "end", marginRight: "7px" }}
          >
            <span className="icon-circle right">
              <FaChevronDown
                className="icons"
                style={{ marginRight: "0" }}
              ></FaChevronDown>
            </span>
          </div>
        </div>
        <div className="description">
          <span>{Math.floor(Math.random() * 101 - 20) + 20}%</span>
          <span>
            {movie.release_date ? movie.release_date.substring(0, 4) : "2021"}
          </span>
          <span>{movie.vote_average}/10</span>
          <span>HD</span>
        </div>
        <div className="genre">
          {movie.genre_ids.map((genre, index) => {
            if (index < 3)
              return <span key={movie.id + index}>{genres[genre].name}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieExplorer;
