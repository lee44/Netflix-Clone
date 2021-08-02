import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import contentLoader from "./contentLoader";
import Trailer from "./Trailer";
import Explorer from "./Explorer";

function Result({ selector }) {
  // const collection = useSelector(selectorMedia);
  // const status = useSelector(selectorStatus);
  // const [trailerUrl, setTrailerUrl] = useState("");
  // const [explorer, setExplorer] = useState({
  //   show: false,
  //   media: null,
  //   event: null,
  // });

  // let content = contentLoader(status, setExplorer, collection);

  return (
    <>
      {/* <div className="grid">{content}</div>
      <Trailer trailerUrl={trailerUrl} setTrailerUrl={setTrailerUrl} />
      {explorer.show && (
        <Explorer
          mediaExplorer={explorer}
          setMediaExplorer={setExplorer}
          setTrailerUrl={setTrailerUrl}
        ></Explorer>
      )}*/}
    </>
  );
}

export default Result;
