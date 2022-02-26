import React from 'react';
import Row from '../../components/row/Row';
import { selectSearch, selectSearchStatus } from '../../redux/searchSlice';

function Search() {
	return (
		<>
			<Row category={'Results'} selectorMedia={selectSearch} selectorStatus={selectSearchStatus} fetchCollection={undefined} fetchUrl={undefined} />
		</>
	);
}

export default Search;
