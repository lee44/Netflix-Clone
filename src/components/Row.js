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
import MovieExplorer from "./MovieExplorer";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ category, fetchUrl, selectorMovie, selectorStatus }) {
  const dispatch = useDispatch();
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movieExplorer, setMovieExplorer] = useState({
    show: false,
    movie: null,
    event: null,
  });
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

  const handleMovieExplorer = (e, show, movie) => {
    setMovieExplorer({ show: show, movie: movie, event: e });
    // const cardRect = e.target.getBoundingClientRect();
    // explorerContainer.style.left = `${cardRect.left - 35}px`;
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
        {movieExplorer["show"] ? (
          <MovieExplorer
            movieExplorer={movieExplorer}
            setMovieExplorer={setMovieExplorer}
          ></MovieExplorer>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Row;
