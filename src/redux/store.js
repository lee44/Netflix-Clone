import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import tvReducer from "../redux/tvSlice";
import movieReducer from "../redux/movieSlice";

export default configureStore({
  reducer: {
    user: tvReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
