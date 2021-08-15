import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";
import searchEndPoint from "../utils/searchEndPoint";

const initialState = {
  collections: [],
  status: "idle",
};

export const searchCollection = createAsyncThunk(
  "media/searchCollection",
  async (query) => {
    const response = await axios.get(`${searchEndPoint}&query=${query}`);
    return response.data.results;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: {
    [searchCollection.pending]: (state, action) => {
      state.status = "pending";
    },
    [searchCollection.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.collections = action.payload;
    },
    [searchCollection.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const selectSearch = (state) => state.search.collections;
export const selectSearchStatus = (state) => state.search.status;

export default searchSlice.reducer;
