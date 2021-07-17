import React from "react";
import Row from "./Row";
import requests from "../utils/requests";
import category from "../utils/category";
import {
  selectTrending,
  selectAction,
  selectComedy,
  selectHorror,
  selectRomance,
  selectDocumentary,
  selectTrendingStatus,
  selectActionStatus,
  selectComedyStatus,
  selectHorrorStatus,
  selectRomanceStatus,
  selectDocumentaryStatus,
} from "../redux/mediaSlice";

function Movie() {
  return (
    <div>
      <Row
        category={category.action}
        fetchUrl={requests.action.movies}
        selectorMedia={selectAction}
        selectorStatus={selectActionStatus}
      />
      <Row
        category={category.comedy}
        fetchUrl={requests.comedy.movies}
        selectorMedia={selectComedy}
        selectorStatus={selectComedyStatus}
      />
      <Row
        category={category.horror}
        fetchUrl={requests.horror.movies}
        selectorMedia={selectHorror}
        selectorStatus={selectHorrorStatus}
      />
      <Row
        category={category.romance}
        fetchUrl={requests.romance.movies}
        selectorMedia={selectRomance}
        selectorStatus={selectRomanceStatus}
      />
      <Row
        category={category.documentary}
        fetchUrl={requests.documentary.movies}
        selectorMedia={selectDocumentary}
        selectorStatus={selectDocumentaryStatus}
      />
    </div>
  );
}

export default Movie;
