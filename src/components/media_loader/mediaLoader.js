import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { fetchMovieCollection } from '../../redux/movieSlice';
import { fetchTVCollection } from '../../redux/tvSlice';
import movieEndPoint from '../../utils/movieEndPoint';
import tvEndPoint from '../../utils/tvEndPoint';
import '../css/mediaLoader.css';

function mediaLoader() {
	const dispatch = useDispatch();

	useEffect(() => {
		for (const key in movieEndPoint) {
			const url = movieEndPoint[key];
			// @ts-ignore
			dispatch(fetchMovieCollection(url));
		}

		for (const key in tvEndPoint) {
			const url = tvEndPoint[key];
			// @ts-ignore
			dispatch(fetchTVCollection(url));
		}
	}, []);

	return (
		<div className='clipLoaderContainer'>
			<ClipLoader color='#FF0000' loading={true} size={150} />
		</div>
	);
}

export default mediaLoader;
