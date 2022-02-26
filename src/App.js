import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav/Nav';
import './css/App.css';
import Home from './pages/home/Home';
import Movie from './pages/movie/Movie';
import NewPopular from './pages/popular/NewPopular';
import Search from './pages/search/Search';
import TV from './pages/tv/TV';

function App() {
	return (
		<div className='app'>
			<Router>
				<Nav />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/tv'>
						<TV />
					</Route>
					<Route path='/movies'>
						<Movie />
					</Route>
					<Route path='/new_popular'>
						<NewPopular />
					</Route>
					<Route path='/search'>
						<Search />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
