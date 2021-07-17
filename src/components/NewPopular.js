import React from "react";
import Row from "./Row";
import requests from "../utils/requests";
import category from "../utils/category";
import {
  selectTrending,
  selectTrendingStatus,
  selectTVTrending,
  selectTVTrendingStatus,
} from "../redux/mediaSlice";

function NewPopular() {
  return (
    <div>
      <Row
        category={category.trending.movie}
        fetchUrl={requests.trending.movies}
        selectorMedia={selectTrending}
        selectorStatus={selectTrendingStatus}
      />
      <Row
        category={category.trending.tv}
        fetchUrl={requests.trending.tv}
        selectorMedia={selectTVTrending}
        selectorStatus={selectTVTrendingStatus}
      />
    </div>
  );
}

export default NewPopular;
