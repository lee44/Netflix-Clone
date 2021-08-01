import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from "./mediaSlice";
import originalMoviesReducer from "./movies/originalMoviesSlice";

export default configureStore({
  reducer: {
    media: mediaReducer,
    originalMovies: originalMoviesReducer,
  },
});
