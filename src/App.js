import React from "react";
import "./css/App.css";
import requests from "./utils/requests";
import category from "./utils/category";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movie from "./components/Movie";
import TV from "./components/TV";
import NewPopular from "./components/NewPopular";
import { selectOriginals, selectOriginalStatus } from "./redux/mediaSlice";

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
          </Route>
          <Route path="/tv">
            <TV />
          </Route>
          <Route path="/movies">
            <Movie />
          </Route>
          <Route path="/new_popular">
            <NewPopular />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
