import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Explorer from "./Explorer";
import Trailer from "./Trailer";
import shuffleArray from "../utils/shuffleArray";
import contentLoader from "./contentLoader";
import settings from "../utils/settings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Row.css";

function Row({ category, fetchCollection, fetchUrl, selectorMedia, selectorStatus }) {
  const dispatch = useDispatch();
  const collection = useSelector(selectorMedia);
  const shuffledCollection = useMemo(() => shuffleArray([...collection]), [collection]);
  const status = useSelector(selectorStatus);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [explorer, setExplorer] = useState({
    show: false,
    media: null,
    event: null,
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCollection(fetchUrl));
    }
  }, [dispatch, fetchCollection, fetchUrl, status]);

  let content = contentLoader(status, setExplorer, shuffledCollection);

  return (
    <div className="row">
      <h2 style={{ marginBottom: "1rem" }}>{category.toUpperCase()}</h2>
      <div className="row-container">
        {status === "succeeded" ? <Slider {...settings}>{content}</Slider> : content}
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
