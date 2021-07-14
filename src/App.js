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
  selectTopRated,
  selectTopRatedStatus,
} from "./redux/mediaSlice";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Banner
              category={category.originals}
              fetchUrl={requests.originals.movies}
              selectorMedia={selectOriginals}
              selectorStatus={selectOriginalStatus}
            />
            <Row
              category={category.trending}
              fetchUrl={requests.trending.movies}
              selectorMedia={selectTrending}
              selectorStatus={selectTrendingStatus}
            />
            <Row
              category={category.action}
              fetchUrl={requests.action.movies}
              selectorMedia={selectAction}
              selectorStatus={selectActionStatus}
            />
            <Row
              category={category.comedy}
              fetchUrl={requests.comedy.movies}
              selectorMedia={selectComedy}
              selectorStatus={selectComedyStatus}
            />
            <Row
              category={category.horror}
              fetchUrl={requests.horror.movies}
              selectorMedia={selectHorror}
              selectorStatus={selectHorrorStatus}
            />
            <Row
              category={category.romance}
              fetchUrl={requests.romance.movies}
              selectorMedia={selectRomance}
              selectorStatus={selectRomanceStatus}
            />
            <Row
              category={category.documentary}
              fetchUrl={requests.documentary.movies}
              selectorMedia={selectDocumentary}
              selectorStatus={selectDocumentaryStatus}
            />
          </Route>
          <Route path="/tv"></Route>
          <Route path="/movies">
            <Row
              category={category.top_rated}
              fetchUrl={requests.top_rated.movie}
              selectorMedia={selectTopRated}
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
