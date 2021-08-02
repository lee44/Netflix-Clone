import React from "react";
import Row from "./Row";
import movieEndPoint from "../utils/movieEndPoint";
import { fetchMovieCollection } from "../redux/movieSlice";
import category from "../utils/category";
import {
  selectMovieAction,
  selectMovieComedy,
  selectMovieHorror,
  selectMovieRomance,
  selectMovieDocumentary,
  selectMovieActionStatus,
  selectMovieComedyStatus,
  selectMovieHorrorStatus,
  selectMovieRomanceStatus,
  selectMovieDocumentaryStatus,
} from "../redux/movieSlice";

function Movie() {
  return (
    <div>
      <Row
        category={category.action}
        fetchCollection={fetchMovieCollection}
        fetchUrl={movieEndPoint.action}
        selectorMedia={selectMovieAction}
        selectorStatus={selectMovieActionStatus}
      />
      <Row
        category={category.comedy}
        fetchCollection={fetchMovieCollection}
        fetchUrl={movieEndPoint.comedy}
        selectorMedia={selectMovieComedy}
        selectorStatus={selectMovieComedyStatus}
      />
      <Row
        category={category.horror}
        fetchCollection={fetchMovieCollection}
        fetchUrl={movieEndPoint.horror}
        selectorMedia={selectMovieHorror}
        selectorStatus={selectMovieHorrorStatus}
      />
      <Row
        category={category.romance}
        fetchCollection={fetchMovieCollection}
        fetchUrl={movieEndPoint.romance}
        selectorMedia={selectMovieRomance}
        selectorStatus={selectMovieRomanceStatus}
      />
      <Row
        category={category.documentary}
        fetchCollection={fetchMovieCollection}
        fetchUrl={movieEndPoint.documentary}
        selectorMedia={selectMovieDocumentary}
        selectorStatus={selectMovieDocumentaryStatus}
      />
    </div>
  );
}

export default Movie;
