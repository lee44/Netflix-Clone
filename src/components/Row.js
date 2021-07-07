import React, { useState, useEffect } from "react";
import "../css/Row.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, selectAll } from "../redux/movieSlice";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import ClipLoader from "react-spinners/ClipLoader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ category, fetchUrl, selectorMovie, selectorStatus }) {
  const dispatch = useDispatch();
  const [trailerUrl, setTrailerUrl] = useState("");

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

  let content;
  if (moviesStatus === "pending") {
    content = (
      <div className="clipLoaderContainer">
        <ClipLoader color="#FF0000" loading={true} size={150} />
      </div>
    );
  } else if (moviesStatus === "succeeded") {
    content = movies.map((movie) => (
      <div style={{ outline: "none" }}>
        <img
          onClick={() =>
            movieClicked(
              movie.name ||
                movie.title ||
                movie.orginal_name ||
                movie.orignal_title
            )
          }
          onMouseOver={() => {
            // console.log("Mouse over card");
          }}
          key={movie.id}
          className="card"
          src={`${movie.backdrop_path ? base_url + movie.backdrop_path : ""}`}
          alt={movie.name}
        />
      </div>
    ));
  } else if (moviesStatus === "failed") {
    content = <div>Error</div>;
  }
  return (
    <div className="row">
      <h2 style={{ marginBottom: "1rem" }}>{category.toUpperCase()}</h2>
      {moviesStatus === "succeeded" ? (
        <Slider {...settings}>{content}</Slider>
      ) : (
        content
      )}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={youtubeOpts} />}
    </div>
  );
}

export default Row;
