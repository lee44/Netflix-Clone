import React from 'react';
import movieEndPoint from '../../api/movieEndPoint';
import tvEndPoint from '../../api/tvEndPoint';
import Banner from '../../components/banner/Banner';
import Row from '../../components/row/Row';
import { fetchMovieCollection, selectMovieOriginals, selectMovieOriginalStatus, selectMovieTopRated, selectMovieTopRatedStatus } from '../../redux/movieSlice';
import { fetchTVCollection, selectTVOriginals, selectTVOriginalStatus, selectTVTopRated, selectTVTopRatedStatus } from '../../redux/tvSlice';
import category from '../../utils/category';

function Home() {
	return (
		<div>
			<Banner
				// @ts-ignore
				fetchCollection={fetchMovieCollection}
				fetchUrl={movieEndPoint.originals}
				selectorMedia={selectMovieOriginals}
				selectorStatus={selectMovieOriginalStatus}
			/>
			<Row
				category={category.originals}
				fetchCollection={fetchMovieCollection}
				fetchUrl={movieEndPoint.originals}
				selectorMedia={selectMovieOriginals}
				selectorStatus={selectMovieOriginalStatus}
			/>
			<Row
				category={category.originals}
				fetchCollection={fetchTVCollection}
				fetchUrl={tvEndPoint.originals}
				selectorMedia={selectTVOriginals}
				selectorStatus={selectTVOriginalStatus}
			/>
			<Row
				category={category.top_rated.movie}
				fetchCollection={fetchMovieCollection}
				fetchUrl={movieEndPoint.top_rated}
				selectorMedia={selectMovieTopRated}
				selectorStatus={selectMovieTopRatedStatus}
			/>
			<Row
				category={category.top_rated.tv}
				fetchCollection={fetchTVCollection}
				fetchUrl={tvEndPoint.top_rated}
				selectorMedia={selectTVTopRated}
				selectorStatus={selectTVTopRatedStatus}
			/>
		</div>
	);
}

export default Home;
