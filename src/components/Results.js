import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCollection } from "../redux/mediaSlice";
import ClipLoader from "react-spinners/ClipLoader";
import "../css/Results.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Results({ category, fetchUrl, selectorMedia, selectorStatus }) {
  const dispatch = useDispatch();
  const collection = useSelector(selectorMedia);
  const status = useSelector(selectorStatus);
  const [explorer, setExplorer] = useState({
    show: false,
    media: null,
    event: null,
  });
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
    content = collection.map((media) => {
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

  return <div className="grid">{content}</div>;
}

export default Results;
