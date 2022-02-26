import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import tvEndPoint from '../api/tvEndPoint';
import axios from '../utils/axios';

const initialState = {
	originals: {
		collections: [],
		status: 'idle',
	},
	trending: {
		collections: [],
		status: 'idle',
	},
	top_rated: {
		collections: [],
		status: 'idle',
	},
	action: {
		collections: [],
		status: 'idle',
	},
	comedy: {
		collections: [],
		status: 'idle',
	},
	horror: {
		collections: [],
		status: 'idle',
	},
	romance: {
		collections: [],
		status: 'idle',
	},
	documentary: {
		collections: [],
		status: 'idle',
	},
};

export const fetchTVCollection = createAsyncThunk('tv/fetchCollection', async (fetchUrl) => {
	// @ts-ignore
	const response = await axios.get(fetchUrl);
	return response.data.results;
});

const tvSlice = createSlice({
	name: 'tv',
	initialState,
	extraReducers: {
		// @ts-ignore
		[fetchTVCollection.pending]: (state, action) => {
			for (const category in tvEndPoint) if (tvEndPoint[category] === action.meta.arg) state[category].status = 'pending';
		},
		// @ts-ignore
		[fetchTVCollection.fulfilled]: (state, action) => {
			for (const category in tvEndPoint)
				if (tvEndPoint[category] === action.meta.arg) {
					state[category].status = 'succeeded';
					state[category].collections = action.payload;
				}
		},
		// @ts-ignore
		[fetchTVCollection.rejected]: (state, action) => {
			for (const category in tvEndPoint) if (tvEndPoint[category] === action.meta.arg) state[category].status = 'pending';
		},
	},
	reducers: undefined,
});

export const selectTVOriginals = (state) => state.tv.originals.collections;
export const selectTVTrending = (state) => state.tv.trending.collections;
export const selectTVTopRated = (state) => state.tv.top_rated.collections;
export const selectTVAction = (state) => state.tv.action.collections;
export const selectTVComedy = (state) => state.tv.comedy.collections;
export const selectTVHorror = (state) => state.tv.horror.collections;
export const selectTVRomance = (state) => state.tv.romance.collections;
export const selectTVDocumentary = (state) => state.tv.documentary.collections;

export const selectTVOriginalStatus = (state) => state.tv.originals.status;
export const selectTVTrendingStatus = (state) => state.tv.trending.status;
export const selectTVTopRatedStatus = (state) => state.tv.top_rated.status;
export const selectTVActionStatus = (state) => state.tv.action.status;
export const selectTVComedyStatus = (state) => state.tv.comedy.status;
export const selectTVHorrorStatus = (state) => state.tv.horror.status;
export const selectTVRomanceStatus = (state) => state.tv.romance.status;
export const selectTVDocumentaryStatus = (state) => state.tv.documentary.status;

export default tvSlice.reducer;
