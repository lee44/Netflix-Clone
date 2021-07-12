import React from "react";
import "./css/App.css";
import requests from "./utils/requests";
import category from "./utils/category";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  selectOriginals,
  selectTrending,
  selectAction,
  selectComedy,
  selectHorror,
  selectRomance,
  selectDocumentary,
  selectOriginalStatus,
  selectTrendingStatus,
  selectActionStatus,
  selectComedyStatus,
  selectHorrorStatus,
  selectRomanceStatus,
  selectDocumentaryStatus,
  selectTVShows,
  selectTVShowsStatus,
  selectTopRated,
  selectTopRatedStatus,
} from "./redux/movieSlice";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Banner
              category={category.originals}
              fetchUrl={requests.originals}
              selectorMovie={selectOriginals}
              selectorStatus={selectOriginalStatus}
            />
            <Row
              category={category.trending}
              fetchUrl={requests.trending}
              selectorMovie={selectTrending}
              selectorStatus={selectTrendingStatus}
            />
            <Row
              category={category.action}
              fetchUrl={requests.action}
              selectorMovie={selectAction}
              selectorStatus={selectActionStatus}
            />
            <Row
              category={category.comedy}
              fetchUrl={requests.comedy}
              selectorMovie={selectComedy}
              selectorStatus={selectComedyStatus}
            />
            <Row
              category={category.horror}
              fetchUrl={requests.horror}
              selectorMovie={selectHorror}
              selectorStatus={selectHorrorStatus}
            />
            <Row
              category={category.romance}
              fetchUrl={requests.romance}
              selectorMovie={selectRomance}
              selectorStatus={selectRomanceStatus}
            />
            <Row
              category={category.documentary}
              fetchUrl={requests.documentary}
              selectorMovie={selectDocumentary}
              selectorStatus={selectDocumentaryStatus}
            />
          </Route>
          <Route path="/tv">
            <Row
              category={category.tv_shows}
              fetchUrl={requests.tv_shows}
              selectorMovie={selectTVShows}
              selectorStatus={selectTVShowsStatus}
            />
          </Route>
          <Route path="/movies">
            <Row
              category={category.top_rated}
              fetchUrl={requests.top_rated}
              selectorMovie={selectTopRated}
              selectorStatus={selectTopRatedStatus}
            />
          </Route>
          <Route path="/new_popular"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
