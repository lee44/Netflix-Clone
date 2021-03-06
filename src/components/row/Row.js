import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import settings from '../../config/settings';
import shuffleArray from '../../utils/shuffleArray';
import contentLoader from '../content_loader/contentLoader';
import Explorer from '../explorer/Explorer';
import Trailer from '../trailer/Trailer';
import './Row.css';

function Row({ category, fetchCollection, fetchUrl, selectorMedia, selectorStatus }) {
	const dispatch = useDispatch();
	const collection = useSelector(selectorMedia);
	// @ts-ignore
	const shuffledCollection = useMemo(() => shuffleArray([...collection]), [collection]);
	const status = useSelector(selectorStatus);
	const [trailerUrl, setTrailerUrl] = useState('');
	const [explorer, setExplorer] = useState({
		show: false,
		media: null,
		event: null,
	});

	useEffect(() => {
		if (status === 'idle' && fetchUrl) {
			dispatch(fetchCollection(fetchUrl));
		}
	}, [dispatch, fetchCollection, fetchUrl, status]);

	let content = contentLoader(status, setExplorer, shuffledCollection);

	return (
		<div className='row'>
			<h2 style={{ marginBottom: '1rem' }}>{category.toUpperCase()}</h2>
			<div className='row-container'>
				{status === 'succeeded' ? <Slider {...settings}>{content}</Slider> : content}
				<Trailer trailerUrl={trailerUrl} setTrailerUrl={setTrailerUrl} />
				{explorer.show && <Explorer mediaExplorer={explorer} setMediaExplorer={setExplorer} setTrailerUrl={setTrailerUrl}></Explorer>}
			</div>
		</div>
	);
}

export default Row;
