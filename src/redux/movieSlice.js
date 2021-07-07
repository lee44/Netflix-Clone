import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";
import requests from "../utils/requests";

const initialState = {
  originals: { movies: null, status: "idle" },
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
export const selectOriginals = (state) => state.movie.originals.movies;
export const selectTrending = (state) => state.movie.trending.movies;
export const selectTopRated = (state) => state.movie.top_rated.movies;
export const selectAction = (state) => state.movie.action.movies;
export const selectComedy = (state) => state.movie.comedy.movies;
export const selectHorror = (state) => state.movie.horror.movies;
export const selectRomance = (state) => state.movie.romance.movies;
export const selectDocumentary = (state) => state.movie.documentary.movies;

export const selectOriginalStatus = (state) => state.movie.originals.status;
export const selectTrendingStatus = (state) => state.movie.trending.status;
export const selectTopRatedStatus = (state) => state.movie.top_rated.status;
export const selectActionStatus = (state) => state.movie.action.status;
export const selectComedyStatus = (state) => state.movie.comedy.status;
export const selectHorrorStatus = (state) => state.movie.horror.status;
export const selectRomanceStatus = (state) => state.movie.romance.status;
export const selectDocumentaryStatus = (state) =>
  state.movie.documentary.status;

export default movieSlice.reducer;
