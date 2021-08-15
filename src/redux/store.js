import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import tvReducer from "./tvSlice";
import searchReducer from "./searchSlice";

export default configureStore({
  reducer: {
    tv: tvReducer,
    movie: movieReducer,
    search: searchReducer,
  },
});
