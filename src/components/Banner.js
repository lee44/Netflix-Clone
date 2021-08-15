import React from "react";
import "../css/Banner.css";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner({ selectorMedia, selectorStatus }) {
  const collection = useSelector(selectorMedia);
  const status = useSelector(selectorStatus);

  let content;
  if (status === "pending") {
    content = (
      <div className="clipLoaderContainer">
        <ClipLoader color="#FF0000" loading={true} size={150} />
      </div>
    );
  } else if (status === "succeeded") {
    const media = collection[Math.floor(Math.random() * 19)];
    content = (
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('${
            media.backdrop_path ? base_url + media.backdrop_path : ""
          }')`,
          backgroundPosition: "top center",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {media?.name || media?.title || media?.orginal_name}
          </h1>
          <p className="banner__description">{media?.overview}</p>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">More Info</button>
          </div>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    );
  } else if (status === "failed") {
    content = <div>Error</div>;
  }
  return <div>{content}</div>;
}

export default Banner;
