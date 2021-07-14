import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from "../redux/mediaSlice";

export default configureStore({
  reducer: {
    media: mediaReducer,
  },
});
