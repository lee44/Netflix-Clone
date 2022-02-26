import React from 'react';
import tvEndPoint from '../../api/tvEndPoint';
import Row from '../../components/row/Row';
import {
	fetchTVCollection,
	selectTVAction,
	selectTVActionStatus,
	selectTVComedy,
	selectTVComedyStatus,
	selectTVDocumentary,
	selectTVDocumentaryStatus,
	selectTVHorror,
	selectTVHorrorStatus,
	selectTVRomance,
	selectTVRomanceStatus,
	selectTVTrending,
	selectTVTrendingStatus,
} from '../../redux/tvSlice';
import category from '../../utils/category';

function TV() {
	return (
		<div>
			<Row
				category={category.trending.tv}
				fetchCollection={fetchTVCollection}
				fetchUrl={tvEndPoint.trending}
				selectorMedia={selectTVTrending}
				selectorStatus={selectTVTrendingStatus}
			/>
			<Row
				category={category.action}
				fetchCollection={fetchTVCollection}
				fetchUrl={tvEndPoint.action}
				selectorMedia={selectTVAction}
				selectorStatus={selectTVActionStatus}
			/>
			<Row
				category={category.comedy}
				fetchCollection={fetchTVCollection}
				fetchUrl={tvEndPoint.comedy}
				selectorMedia={selectTVComedy}
				selectorStatus={selectTVComedyStatus}
			/>
			<Row
				category={category.horror}
				fetchCollection={fetchTVCollection}
				fetchUrl={tvEndPoint.horror}
				selectorMedia={selectTVHorror}
				selectorStatus={selectTVHorrorStatus}
			/>
			<Row
				category={category.romance}
				fetchCollection={fetchTVCollection}
				fetchUrl={tvEndPoint.romance}
				selectorMedia={selectTVRomance}
				selectorStatus={selectTVRomanceStatus}
			/>
			<Row
				category={category.documentary}
				fetchCollection={fetchTVCollection}
				fetchUrl={tvEndPoint.documentary}
				selectorMedia={selectTVDocumentary}
				selectorStatus={selectTVDocumentaryStatus}
			/>
		</div>
	);
}

export default TV;
