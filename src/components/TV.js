import React from "react";
import Row from "./Row";
import requests from "../utils/requests";
import category from "../utils/category";
import {
  selectTVTrending,
  selectTVAction,
  selectTVComedy,
  selectTVHorror,
  selectTVRomance,
  selectTVDocumentary,
  selectTVTrendingStatus,
  selectTVActionStatus,
  selectTVComedyStatus,
  selectTVHorrorStatus,
  selectTVRomanceStatus,
  selectTVDocumentaryStatus,
} from "../redux/mediaSlice";

function TV() {
  return (
    <div>
      <Row
        category={category.trending.tv}
        fetchUrl={requests.trending.tv}
        selectorMedia={selectTVTrending}
        selectorStatus={selectTVTrendingStatus}
      />
      <Row
        category={category.action}
        fetchUrl={requests.action.tv}
        selectorMedia={selectTVAction}
        selectorStatus={selectTVActionStatus}
      />
      <Row
        category={category.comedy}
        fetchUrl={requests.comedy.tv}
        selectorMedia={selectTVComedy}
        selectorStatus={selectTVComedyStatus}
      />
      <Row
        category={category.horror}
        fetchUrl={requests.horror.tv}
        selectorMedia={selectTVHorror}
        selectorStatus={selectTVHorrorStatus}
      />
      <Row
        category={category.romance}
        fetchUrl={requests.romance.tv}
        selectorMedia={selectTVRomance}
        selectorStatus={selectTVRomanceStatus}
      />
      <Row
        category={category.documentary}
        fetchUrl={requests.documentary.tv}
        selectorMedia={selectTVDocumentary}
        selectorStatus={selectTVDocumentaryStatus}
      />
    </div>
  );
}

export default TV;
