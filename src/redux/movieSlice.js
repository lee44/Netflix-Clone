import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";
import requests from "../utils/requests";

const initialState = {
  trending: { movies: null, status: "idle" },
  top_rated: { movies: null, status: "idle" },
  action: { movies: null, status: "idle" },
  comedy: { movies: null, status: "idle" },
  horror: { movies: null, status: "idle" },
  romance: { movies: null, status: "idle" },
  documentary: { movies: null, status: "idle" },
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (fetchUrl) => {
    const response = await axios.get(fetchUrl);
    return response.data.results;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setTrending: (state, action) => {
      state.trending = action.payload.trending;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {
      for (const property in requests) {
        if (requests[property] === action.meta.arg) {
          state[property].status = "pending";
        }
      }
    },
    [fetchMovies.fulfilled]: (state, action) => {
      for (const property in requests) {
        if (requests[property] === action.meta.arg) {
          state[property].status = "succeeded";
          state[property].movies = action.payload;
        }
      }
    },
    [fetchMovies.rejected]: (state, action) => {
      for (const property in requests) {
        if (requests[property] === action.meta.arg) {
          state[property].status = "failed";
        }
      }
    },
  },
});

//setMovies is an action creator
export const { setTrending } = movieSlice.actions;

export const selectAll = (state) => state.movie;

export default movieSlice.reducer;
