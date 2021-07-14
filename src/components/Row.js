import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCollection } from "../redux/mediaSlice";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import ClipLoader from "react-spinners/ClipLoader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Row.css";
import Explorer from "./Explorer";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ category, fetchUrl, selectorMedia, selectorStatus }) {
  const dispatch = useDispatch();
  const [trailerUrl, setTrailerUrl] = useState("");
  const [explorer, setExplorer] = useState({
    show: false,
    media: null,
    event: null,
  });
  const collection = useSelector(selectorMedia);
  const status = useSelector(selectorStatus);

  useEffect(() => {
    dispatch(fetchCollection(fetchUrl));
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

  const mediaClicked = (medianame) => {
    if (trailerUrl) setTrailerUrl("");
    else {
      movieTrailer(medianame)
        .then((url) => {
          const urlParamV = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParamV.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  const handleExplorer = (e, show, media) => {
    setExplorer({ show: show, media: media, event: e });
  };

  let content;
  if (status === "pending") {
    content = (
      <div className="clipLoaderContainer">
        <ClipLoader color="#FF0000" loading={true} size={150} />
      </div>
    );
  } else if (status === "succeeded") {
    content = collection.map((media) => {
      return (
        <div key={media.id}>
          <img
            onClick={() =>
              mediaClicked(
                media.name ||
                  media.title ||
                  media.orginal_name ||
                  media.orignal_title
              )
            }
            onMouseOver={(e) => {
              handleExplorer(e, true, media);
            }}
            className="card"
            src={`${media.backdrop_path ? base_url + media.backdrop_path : ""}`}
            alt={media.name}
          />
        </div>
      );
    });
  } else if (status === "failed") {
    content = <div>Error</div>;
  }
  return (
    <div className="row">
      <h2 style={{ marginBottom: "1rem" }}>{category.toUpperCase()}</h2>
      <div className="row-container">
        {status === "succeeded" ? (
          <Slider {...settings}>{content}</Slider>
        ) : (
          content
        )}
        {trailerUrl && <YouTube videoId={trailerUrl} opts={youtubeOpts} />}
        {explorer["show"] ? (
          <Explorer
            mediaExplorer={explorer}
            setMediaExplorer={setExplorer}
          ></Explorer>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Row;
