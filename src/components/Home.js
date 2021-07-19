import React from "react";
import requests from "../utils/requests";
import category from "../utils/category";
import Banner from "./Banner";
import Row from "./Row";
import {
  selectOriginals,
  selectTVOriginals,
  selectAllTrending,
  selectTopRated,
  selectTVTopRated,
  selectOriginalStatus,
  selectTVOriginalStatus,
  selectAllTrendingStatus,
  selectTopRatedStatus,
  selectTVTopRatedStatus,
} from "../redux/mediaSlice";

function Home() {
  return (
    <div>
      <Banner
        category={category.originals}
        fetchUrl={[requests.originals.movies]}
        selectorMedia={selectOriginals}
        selectorStatus={selectOriginalStatus}
      />
      <Row
        category={category.trending.all}
        fetchUrl={requests.trending.all}
        selectorMedia={selectAllTrending}
        selectorStatus={selectAllTrendingStatus}
      />
      <Row
        category={category.originals}
        fetchUrl={requests.originals.tv}
        selectorMedia={selectTVOriginals}
        selectorStatus={selectTVOriginalStatus}
      />
      <Row
        category={category.top_rated.movie}
        fetchUrl={requests.top_rated.movies}
        selectorMedia={selectTopRated}
        selectorStatus={selectTopRatedStatus}
      />
      <Row
        category={category.top_rated.tv}
        fetchUrl={requests.top_rated.tv}
        selectorMedia={selectTVTopRated}
        selectorStatus={selectTVTopRatedStatus}
      />
    </div>
  );
}

export default Home;
