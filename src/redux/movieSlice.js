import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieEndPoint from '../api/movieEndPoint';
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

export const fetchMovieCollection = createAsyncThunk('movie/fetchCollection', async (fetchUrl) => {
	// @ts-ignore
	const response = await axios.get(fetchUrl);
	return response.data.results;
});

// @ts-ignore
const movieSlice = createSlice({
	name: 'movie',
	initialState,
	extraReducers: {
		// @ts-ignore
		[fetchMovieCollection.pending]: (state, action) => {
			for (const category in movieEndPoint) if (movieEndPoint[category] === action.meta.arg) state[category].status = 'pending';
		},
		// @ts-ignore
		[fetchMovieCollection.fulfilled]: (state, action) => {
			for (const category in movieEndPoint)
				if (movieEndPoint[category] === action.meta.arg) {
					state[category].status = 'succeeded';
					state[category].collections = action.payload;
				}
		},
		// @ts-ignore
		[fetchMovieCollection.rejected]: (state, action) => {
			for (const category in movieEndPoint) if (movieEndPoint[category] === action.meta.arg) state[category].status = 'failed';
		},
	},
});

export const selectMovieOriginals = (state) => state.movie.originals.collections;
export const selectMovieTrending = (state) => state.movie.trending.collections;
export const selectMovieTopRated = (state) => state.movie.top_rated.collections;
export const selectMovieAction = (state) => state.movie.action.collections;
export const selectMovieComedy = (state) => state.movie.comedy.collections;
export const selectMovieHorror = (state) => state.movie.horror.collections;
export const selectMovieRomance = (state) => state.movie.romance.collections;
export const selectMovieDocumentary = (state) => state.movie.documentary.collections;

export const selectMovieOriginalStatus = (state) => state.movie.originals.status;
export const selectMovieTrendingStatus = (state) => state.movie.trending.status;
export const selectMovieTopRatedStatus = (state) => state.movie.top_rated.status;
export const selectMovieActionStatus = (state) => state.movie.action.status;
export const selectMovieComedyStatus = (state) => state.movie.comedy.status;
export const selectMovieHorrorStatus = (state) => state.movie.horror.status;
export const selectMovieRomanceStatus = (state) => state.movie.romance.status;
export const selectMovieDocumentaryStatus = (state) => state.movie.documentary.status;

export default movieSlice.reducer;
