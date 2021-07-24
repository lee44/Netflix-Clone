import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function contentLoader(status, setExplorer, shuffledCollection) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  let content;

  const handleExplorer = (e, show, media) => {
    setTimeout(() => {
      setExplorer({ show: show, media: media, event: e });
    }, 100);
  };

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
  return content;
}

export default contentLoader;
