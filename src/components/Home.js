import React from "react";
import tvEndPoint from "../utils/tvEndPoint";
import { fetchTVCollection } from "../redux/tvSlice";
import movieEndPoint from "../utils/movieEndPoint";
import { fetchMovieCollection } from "../redux/movieSlice";
import category from "../utils/category";
import Banner from "./Banner";
import Row from "./Row";
import {
  selectMovieOriginals,
  selectMovieTopRated,
  selectMovieOriginalStatus,
  selectMovieTopRatedStatus,
} from "../redux/movieSlice";
import {
  selectTVOriginals,
  selectTVTopRated,
  selectTVOriginalStatus,
  selectTVTopRatedStatus,
} from "../redux/tvSlice";

function Home() {
  return (
    <div>
      <Banner
        fetchCollection={fetchMovieCollection}
        fetchUrl={movieEndPoint.originals}
        selectorMedia={selectMovieOriginals}
        selectorStatus={selectMovieOriginalStatus}
      />
      <Row
        category={category.originals}
        fetchCollection={fetchMovieCollection}
        fetchUrl={movieEndPoint.originals}
        selectorMedia={selectMovieOriginals}
        selectorStatus={selectMovieOriginalStatus}
      />
      <Row
        category={category.originals}
        fetchCollection={fetchTVCollection}
        fetchUrl={tvEndPoint.originals}
        selectorMedia={selectTVOriginals}
        selectorStatus={selectTVOriginalStatus}
      />
      <Row
        category={category.top_rated.movie}
        fetchCollection={fetchMovieCollection}
        fetchUrl={movieEndPoint.top_rated}
        selectorMedia={selectMovieTopRated}
        selectorStatus={selectMovieTopRatedStatus}
      />
      <Row
        category={category.top_rated.tv}
        fetchCollection={fetchTVCollection}
        fetchUrl={tvEndPoint.top_rated}
        selectorMedia={selectTVTopRated}
        selectorStatus={selectTVTopRatedStatus}
      />
    </div>
  );
}

export default Home;
