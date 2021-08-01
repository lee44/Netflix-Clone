import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";

const initialState = {
  collection: [],
  status: "idle",
};

export const fetchOriginalMovies = createAsyncThunk(
  "movies/fetchOriginal",
  async (fetchUrl) => {
    const response = await axios.get(fetchUrl);
    return response.data.results;
  }
);

const originalMoviesSlice = createSlice({
  name: "originalMovies",
  initialState,
  extraReducers: {
    [fetchOriginalMovies.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchOriginalMovies.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.collection = action.payload;
    },
    [fetchOriginalMovies.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const selectOriginals = (state) => state.originalMovies.collection;
export const selectOriginalStatus = (state) => state.originalMovies.status;

export default originalMoviesSlice.reducer;
