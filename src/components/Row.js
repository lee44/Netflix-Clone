import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCollection } from "../redux/mediaSlice";
import Explorer from "./Explorer";
import Trailer from "./Trailer";
import shuffleArray from "../utils/shuffleArray";
import ClipLoader from "react-spinners/ClipLoader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ category, fetchUrl, selectorMedia, selectorStatus }) {
  const dispatch = useDispatch();
  const collection = useSelector(selectorMedia);
  const shuffledCollection = useMemo(
    () => shuffleArray([...collection]),
    [collection]
  );
  const status = useSelector(selectorStatus);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [explorer, setExplorer] = useState({
    show: false,
    media: null,
    event: null,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCollection(fetchUrl));
    }
  }, [dispatch, fetchUrl, status]);

  const handleExplorer = (e, show, media) => {
    setTimeout(() => {
      setExplorer({ show: show, media: media, event: e });
    }, 100);
  };

  let content;
  if (status === "pending") {
    content = (
      <div className="clipLoaderContainer">
        <ClipLoader color="#FF0000" loading={true} size={150} />
      </div>
    );
  } else if (status === "succeeded") {
    content = shuffledCollection.map((media) => {
      return (
        <div key={media.id}>
          <img
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
        <Trailer trailerUrl={trailerUrl} setTrailerUrl={setTrailerUrl} />
        {explorer.show && (
          <Explorer
            mediaExplorer={explorer}
            setMediaExplorer={setExplorer}
            setTrailerUrl={setTrailerUrl}
          ></Explorer>
        )}
      </div>
    </div>
  );
}

export default Row;
