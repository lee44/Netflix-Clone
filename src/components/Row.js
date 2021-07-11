import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/movieSlice";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import ClipLoader from "react-spinners/ClipLoader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Row.css";
import {
  FaPlay,
  FaPlus,
  FaThumbsUp,
  FaThumbsDown,
  FaChevronDown,
} from "react-icons/fa";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ category, fetchUrl, selectorMovie, selectorStatus }) {
  const dispatch = useDispatch();
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movieExplorer, setMovieExplorer] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const movies = useSelector(selectorMovie);
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 6,
    slidesToScroll: 6,
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

  const handleMovieExplorer = (e, state, movie) => {
    if (state) {
      setMovieExplorer(state);
      const cardRect = e.target.getBoundingClientRect();
      const explorerContainer = containerRef.current;
      const imageContainer = imageRef.current;

      explorerContainer.style.left = `${cardRect.left - 35}px`;
      imageContainer.src = base_url + movie.backdrop_path;
    } else {
      setMovieExplorer(false);
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
    content = movies.map((movie) => {
      return (
        <div key={movie.id}>
          <img
            onClick={() =>
              movieClicked(
                movie.name ||
                  movie.title ||
                  movie.orginal_name ||
                  movie.orignal_title
              )
            }
            onMouseOver={(e) => {
              handleMovieExplorer(e, true, movie);
            }}
            className="card"
            src={`${movie.backdrop_path ? base_url + movie.backdrop_path : ""}`}
            alt={movie.name}
          />
        </div>
      );
    });
  } else if (moviesStatus === "failed") {
    content = <div>Error</div>;
  }
  return (
    <div className="row">
      <h2 style={{ marginBottom: "1rem" }}>{category.toUpperCase()}</h2>
      <div className="row-container">
        {moviesStatus === "succeeded" ? (
          <Slider {...settings}>{content}</Slider>
        ) : (
          content
        )}
        {trailerUrl && <YouTube videoId={trailerUrl} opts={youtubeOpts} />}
        <div
          className={`${
            movieExplorer ? "show explorer-container" : " explorer-container"
          }`}
          ref={containerRef}
          onMouseLeave={(e) => {
            handleMovieExplorer(e, false);
          }}
        >
          <img className="cardExplorer" src="" alt="" ref={imageRef} />
          <div className="footer">
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
                style={{ flexGrow: "1", textAlign: "end" }}
              >
                <span className="icon-circle right">
                  <FaChevronDown className="icons"></FaChevronDown>
                </span>
              </div>
            </div>
            <div className="description">
              <span>98% Match</span>
              <span>TV-14</span>
              <span>5 Seasons</span>
              <span>HD</span>
            </div>
            <div className="genre">
              <span>Horror</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row;
