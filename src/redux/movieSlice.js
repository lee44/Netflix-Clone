import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trending: null,
  top_rated: null,
  action: null,
  comedy: null,
  horror: null,
  romance: null,
  documentary: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
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
export const { setMovies } = movieSlice.actions;

export const selectTrending = (state) => state.movie.trending;
export const selectTopRated = (state) => state.movie.top_rated;
export const selectAction = (state) => state.movie.action;
export const selectComedy = (state) => state.movie.comedy;
export const selecthorror = (state) => state.movie.horror;
export const selectromance = (state) => state.movie.romance;
export const selectdocumentary = (state) => state.movie.documentary;

export default movieSlice.reducer;
