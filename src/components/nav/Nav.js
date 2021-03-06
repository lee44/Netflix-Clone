import React, { useEffect, useRef, useState } from 'react';
import { IconContext } from 'react-icons';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png';
import avatar from '../../assets/netflix_avatar.png';
import { searchCollection } from '../../redux/searchSlice';
import './Nav.css';

function Nav() {
	const dispatch = useDispatch();
	const [navbarBlack, setNavbarBlack] = useState(false);
	const [inputOpen, setInputOpen] = useState(false);
	const navbarRef = useRef({});
	const searchRef = useRef();
	const history = useHistory();

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setNavbarBlack(true);
			} else setNavbarBlack(false);
		});
		return () => {
			// @ts-ignore
			window.removeEventListener('scroll');
		};
	}, []);

	const handleClicked = (e) => {
		for (const key in navbarRef.current) {
			navbarRef.current[key].style = 'font-weight:normal';
		}

		switch (e.target.innerHTML) {
			case 'Home':
				navbarRef.current['home'].style = 'font-weight:bold';
				break;
			case 'TV Shows':
				navbarRef.current['tv'].style = 'font-weight:bold';
				break;
			case 'Movies':
				navbarRef.current['movies'].style = 'font-weight:bold';
				break;
			case 'My List':
				navbarRef.current['list'].style = 'font-weight:bold';
				break;
			default:
				navbarRef.current['new'].style = 'font-weight:bold';
				break;
		}
	};

	// @ts-ignore
	const openInput = (e) => {
		setInputOpen(!inputOpen);
	};

	return (
		<nav className={`${navbarBlack && 'nav_black'}`}>
			<div className='nav_container'>
				<div className='nav_menu'>
					<Link to='/'>
						<img className='nav_logo' src={logo} alt='netflix_logo' />
					</Link>
					<ul>
						<li>
							<Link to='/' style={{ fontWeight: 'bold' }} onClick={handleClicked} ref={(el) => (navbarRef.current['home'] = el)}>
								Home
							</Link>
						</li>
						<li>
							<Link to='/tv' onClick={handleClicked} ref={(el) => (navbarRef.current['tv'] = el)}>
								TV Shows
							</Link>
						</li>
						<li>
							<Link to='/movies' onClick={handleClicked} ref={(el) => (navbarRef.current['movies'] = el)}>
								Movies
							</Link>
						</li>
						<li>
							<Link to='/new_popular' onClick={handleClicked} ref={(el) => (navbarRef.current['new'] = el)}>
								New & Popular
							</Link>
						</li>
						<li>
							<Link to='/list' onClick={handleClicked} ref={(el) => (navbarRef.current['list'] = el)}>
								My List
							</Link>
						</li>
					</ul>
				</div>
				<div className='nav_menu'>
					<IconContext.Provider
						value={{
							color: 'white',
							size: '1.25rem',
							className: 'search-icon',
						}}
					>
						<div className='input-container'>
							<input
								ref={searchRef}
								type='text'
								placeholder='Enter a title...'
								className={`${inputOpen ? 'open_input' : 'close_input'}`}
								onClick={() => {
									history.push('/search');
								}}
								onKeyUp={(e) => {
									// @ts-ignore
									dispatch(searchCollection(e.target.value));
								}}
							/>
							<BsSearch onClick={openInput}></BsSearch>
						</div>
					</IconContext.Provider>
					<img className='nav_avatar' src={avatar} alt='avatar' />
				</div>
			</div>
		</nav>
	);
}

export default Nav;
