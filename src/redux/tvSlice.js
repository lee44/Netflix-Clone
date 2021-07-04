import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  original: null,
  trending: null,
  top_rated: null,
  action: null,
  comedy: null,
  horror: null,
  romance: null,
  documentary: null,
};

const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    setTV: (state, action) => {
      state.original = action.payload.original;
      state.trending = action.payload.trending;
      state.top_rated = action.payload.top_rated;
      state.action = action.payload.top_rated;
      state.comedy = action.payload.comedy;
      state.horror = action.payload.horror;
      state.romance = action.payload.romance;
      state.documentary = action.payload.documentary;
    },
  },
});

//setMovies is an action creator
export const { setTV } = tvSlice.actions;

export const selectOriginal = (state) => state.tv.original;
export const selectTrending = (state) => state.tv.trending;
export const selectTopRated = (state) => state.tv.top_rated;
export const selectAction = (state) => state.tv.action;
export const selectComedy = (state) => state.tv.comedy;
export const selecthorror = (state) => state.tv.horror;
export const selectromance = (state) => state.tv.romance;
export const selectdocumentary = (state) => state.tv.documentary;

export default tvSlice.reducer;
