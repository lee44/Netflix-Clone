import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";
import requests from "../utils/requests";

const initialState = {
  originals: {
    movies: { collections: [], status: "idle" },
    tv: { collections: [], status: "idle" },
  },
  trending: {
    movies: { collections: [], status: "idle" },
    tv: { collections: [], status: "idle" },
    all: { collections: [], status: "idle" },
  },
  top_rated: {
    movies: { collections: [], status: "idle" },
    tv: { collections: [], status: "idle" },
  },
  action: {
    movies: { collections: [], status: "idle" },
    tv: { collections: [], status: "idle" },
  },
  comedy: {
    movies: { collections: [], status: "idle" },
    tv: { collections: [], status: "idle" },
  },
  horror: {
    movies: { collections: [], status: "idle" },
    tv: { collections: [], status: "idle" },
  },
  romance: {
    movies: { collections: [], status: "idle" },
    tv: { collections: [], status: "idle" },
  },
  documentary: {
    movies: { collections: [], status: "idle" },
    tv: { collections: [], status: "idle" },
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

//TV
export const selectTVOriginals = (state) =>
  state.media.originals.tv.collections;
export const selectTVTrending = (state) => state.media.trending.tv.collections;
export const selectTVTopRated = (state) => state.media.top_rated.tv.collections;
export const selectTVAction = (state) => state.media.action.tv.collections;
export const selectTVComedy = (state) => state.media.comedy.tv.collections;
export const selectTVHorror = (state) => state.media.horror.tv.collections;
export const selectTVRomance = (state) => state.media.romance.tv.collections;
export const selectTVDocumentary = (state) =>
  state.media.documentary.tv.collections;

// Status
export const selectTVOriginalStatus = (state) =>
  state.media.originals.tv.status;
export const selectTVTrendingStatus = (state) => state.media.trending.tv.status;
export const selectTVTopRatedStatus = (state) =>
  state.media.top_rated.tv.status;
export const selectTVActionStatus = (state) => state.media.action.tv.status;
export const selectTVComedyStatus = (state) => state.media.comedy.tv.status;
export const selectTVHorrorStatus = (state) => state.media.horror.tv.status;
export const selectTVRomanceStatus = (state) => state.media.romance.tv.status;
export const selectTVDocumentaryStatus = (state) =>
  state.media.documentary.tv.status;

// All
export const selectAllTrending = (state) =>
  state.media.trending.all.collections;

export const selectAllTrendingStatus = (state) =>
  state.media.trending.all.status;

export default mediaSlice.reducer;
