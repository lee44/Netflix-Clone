import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import searchEndPoint from '../api/searchEndPoint';
import axios from '../utils/axios';

const initialState = {
	collections: [],
	status: 'idle',
};

export const searchCollection = createAsyncThunk('media/searchCollection', async (query) => {
	const response = await axios.get(`${searchEndPoint}&query=${query}`);
	return response.data.results;
});

const searchSlice = createSlice({
	name: 'search',
	initialState,
	extraReducers: {
		// @ts-ignore
		[searchCollection.pending]: (state, action) => {
			state.status = 'pending';
		},
		// @ts-ignore
		[searchCollection.fulfilled]: (state, action) => {
			state.status = 'succeeded';
			state.collections = action.payload;
		},
		// @ts-ignore
		[searchCollection.rejected]: (state, action) => {
			state.status = 'failed';
		},
	},
	reducers: undefined,
});

export const selectSearch = (state) => state.search.collections;
export const selectSearchStatus = (state) => state.search.status;

export default searchSlice.reducer;
