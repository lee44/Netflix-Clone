import React from "react";
import movieTrailer from "movie-trailer";
import "../css/Explorer.css";
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
const Explorer = ({
  mediaExplorer: { show, media, event },
  setMediaExplorer,
  setTrailerUrl,
}) => {
  const mediaClicked = (medianame) => {
    movieTrailer(medianame)
      .then((url) => {
        const urlParamV = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParamV.get("v"));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      // Try building another class opposite of show and add it to the right
      className={`${show ? "show explorer-container" : " explorer-container"}`}
      onMouseLeave={() => {
        setMediaExplorer({ show: false, media: null, event: null });
      }}
      style={{ left: `${event.target.getBoundingClientRect().left - 35}px` }}
    >
      <img
        className="cardExplorer"
        src={`${media.backdrop_path ? base_url + media.backdrop_path : ""}`}
        alt={media.name}
      />
      <div className="footer">
        <h5 style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
          {media.title || media.name}
        </h5>
        <div className="button-container">
          <div
            className="icon-container"
            onClick={() => {
              mediaClicked(media.name || media.title || media.original_name);
            }}
          >
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
            {media.release_date
              ? media.release_date.substring(0, 4)
              : media.first_air_date.substring(0, 4)}
          </span>
          <span>{media.vote_average}/10</span>
          <span>HD</span>
        </div>
        <div className="genre">
          {media.genre_ids.map((genre, index) => {
            if (index < 3)
              return <span key={media.id + index}>{genres[genre].name}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Explorer;