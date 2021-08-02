import React from "react";
import Row from "./Row";
import tvEndPoint from "../utils/tvEndPoint";
import { fetchTVCollection } from "../redux/tvSlice";
import movieEndPoint from "../utils/movieEndPoint";
import { fetchMovieCollection } from "../redux/movieSlice";
import category from "../utils/category";
import { selectMovieTrending, selectMovieTrendingStatus } from "../redux/movieSlice";
import { selectTVTrending, selectTVTrendingStatus } from "../redux/tvSlice";

function NewPopular() {
  return (
    <div>
      <Row
        category={category.trending.movie}
        fetchCollection={fetchMovieCollection}
        fetchUrl={movieEndPoint.trending}
        selectorMedia={selectMovieTrending}
        selectorStatus={selectMovieTrendingStatus}
      />
      <Row
        category={category.trending.tv}
        fetchCollection={fetchTVCollection}
        fetchUrl={tvEndPoint.trending}
        selectorMedia={selectTVTrending}
        selectorStatus={selectTVTrendingStatus}
      />
    </div>
  );
}

export default NewPopular;
