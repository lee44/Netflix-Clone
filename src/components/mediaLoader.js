import React from "react";
import { useDispatch } from "react-redux";
import { fetchTVCollection } from "../redux/tvSlice";
import { fetchMovieCollection } from "../redux/movieSlice";
import tvEndPoint from "../utils/tvEndPoint";
import movieEndPoint from "../utils/movieEndPoint";
import ClipLoader from "react-spinners/ClipLoader";
import "../css/mediaLoader.css";

function mediaLoader() {
  const dispatch = useDispatch();

  useEffect(() => {
    for (const key in movieEndPoint) {
      const url = movieEndPoint[key];
      dispatch(fetchMovieCollection(url));
    }

    for (const key in tvEndPoint) {
      const url = tvEndPoint[key];
      dispatch(fetchTVCollection(url));
    }
  }, []);

  return (
    <div className="clipLoaderContainer">
      <ClipLoader color="#FF0000" loading={true} size={150} />
    </div>
  );
}

export default mediaLoader;
