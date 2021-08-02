import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import tvReducer from "./tvSlice";

export default configureStore({
  reducer: {
    tv: tvReducer,
    movie: movieReducer,
  },
});
