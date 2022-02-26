import React from 'react';
import movieEndPoint from '../../api/movieEndPoint';
import Row from '../../components/row/Row';
import {
	fetchMovieCollection,
	selectMovieAction,
	selectMovieActionStatus,
	selectMovieComedy,
	selectMovieComedyStatus,
	selectMovieDocumentary,
	selectMovieDocumentaryStatus,
	selectMovieHorror,
	selectMovieHorrorStatus,
	selectMovieRomance,
	selectMovieRomanceStatus,
} from '../../redux/movieSlice';
import category from '../../utils/category';

function Movie() {
	return (
		<div>
			<Row
				category={category.action}
				fetchCollection={fetchMovieCollection}
				fetchUrl={movieEndPoint.action}
				selectorMedia={selectMovieAction}
				selectorStatus={selectMovieActionStatus}
			/>
			<Row
				category={category.comedy}
				fetchCollection={fetchMovieCollection}
				fetchUrl={movieEndPoint.comedy}
				selectorMedia={selectMovieComedy}
				selectorStatus={selectMovieComedyStatus}
			/>
			<Row
				category={category.horror}
				fetchCollection={fetchMovieCollection}
				fetchUrl={movieEndPoint.horror}
				selectorMedia={selectMovieHorror}
				selectorStatus={selectMovieHorrorStatus}
			/>
			<Row
				category={category.romance}
				fetchCollection={fetchMovieCollection}
				fetchUrl={movieEndPoint.romance}
				selectorMedia={selectMovieRomance}
				selectorStatus={selectMovieRomanceStatus}
			/>
			<Row
				category={category.documentary}
				fetchCollection={fetchMovieCollection}
				fetchUrl={movieEndPoint.documentary}
				selectorMedia={selectMovieDocumentary}
				selectorStatus={selectMovieDocumentaryStatus}
			/>
		</div>
	);
}

export default Movie;
