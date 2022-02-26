import React from 'react';
import movieEndPoint from '../../api/movieEndPoint';
import tvEndPoint from '../../api/tvEndPoint';
import Row from '../../components/row/Row';
import { fetchMovieCollection, selectMovieTrending, selectMovieTrendingStatus } from '../../redux/movieSlice';
import { fetchTVCollection, selectTVTrending, selectTVTrendingStatus } from '../../redux/tvSlice';
import category from '../../utils/category';

function NewPopular() {
	return (
		<div>
			<Row
				category={category.trending.movie}
				fetchCollection={fetchMovieCollection}
				fetchUrl={movieEndPoint.trending}
				selectorMedia={selectMovieTrending}
				selectorStatus={selectMovieTrendingStatus}
			/>
			<Row
				category={category.trending.tv}
				fetchCollection={fetchTVCollection}
				fetchUrl={tvEndPoint.trending}
				selectorMedia={selectTVTrending}
				selectorStatus={selectTVTrendingStatus}
			/>
		</div>
	);
}

export default NewPopular;
