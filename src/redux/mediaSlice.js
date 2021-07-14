import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";
import requests from "../utils/requests";

const initialState = {
  originals: {
    movies: { collections: null, status: "idle" },
    tv: { collections: null, status: "idle" },
  },
  trending: {
    movies: { collections: null, status: "idle" },
    tv: { collections: null, status: "idle" },
  },
  top_rated: {
    movies: { collections: null, status: "idle" },
    tv: { collections: null, status: "idle" },
  },
  action: {
    movies: { collections: null, status: "idle" },
    tv: { collections: null, status: "idle" },
  },
  comedy: {
    movies: { collections: null, status: "idle" },
    tv: { collections: null, status: "idle" },
  },
  horror: {
    movies: { collections: null, status: "idle" },
    tv: { collections: null, status: "idle" },
  },
  romance: {
    movies: { collections: null, status: "idle" },
    tv: { collections: null, status: "idle" },
  },
  documentary: {
    movies: { collections: null, status: "idle" },
    tv: { collections: null, status: "idle" },
  },
};

export const fetchCollection = createAsyncThunk(
  "media/fetchCollection",
  async (fetchUrl) => {
    const response = await axios.get(fetchUrl);
    return response.data.results;
  }
);

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCollection.pending]: (state, action) => {
      for (const category in requests)
        for (const media in requests[category]) {
          if (requests[category][media] === action.meta.arg) {
            state[category][media].status = "pending";
          }
        }
    },
    [fetchCollection.fulfilled]: (state, action) => {
      for (const category in requests)
        for (const media in requests[category]) {
          if (requests[category][media] === action.meta.arg) {
            state[category][media].status = "succeeded";
            state[category][media].collections = action.payload;
          }
        }
    },
    [fetchCollection.rejected]: (state, action) => {
      for (const category in requests)
        for (const media in requests[category]) {
          if (requests[category][media] === action.meta.arg) {
            state[category][media].status = "failed";
          }
        }
    },
  },
});

export const selectAll = (state) => state.media;

//Movies
export const selectOriginals = (state) =>
  state.media.originals.movies.collections;
export const selectTrending = (state) =>
  state.media.trending.movies.collections;
export const selectTopRated = (state) =>
  state.media.top_rated.movies.collections;
export const selectAction = (state) => state.media.action.movies.collections;
export const selectComedy = (state) => state.media.comedy.movies.collections;
export const selectHorror = (state) => state.media.horror.movies.collections;
export const selectRomance = (state) => state.media.romance.movies.collections;
export const selectDocumentary = (state) =>
  state.media.documentary.movies.collections;

// Status
export const selectOriginalStatus = (state) =>
  state.media.originals.movies.status;
export const selectTrendingStatus = (state) =>
  state.media.trending.movies.status;
export const selectTopRatedStatus = (state) =>
  state.media.top_rated.movies.status;
export const selectActionStatus = (state) => state.media.action.movies.status;
export const selectComedyStatus = (state) => state.media.comedy.movies.status;
export const selectHorrorStatus = (state) => state.media.horror.movies.status;
export const selectRomanceStatus = (state) => state.media.romance.movies.status;
export const selectDocumentaryStatus = (state) =>
  state.media.documentary.movies.status;

export default mediaSlice.reducer;
