import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Movie from "./components/Movie";
import TV from "./components/TV";
import NewPopular from "./components/NewPopular";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tv">{/* <TV /> */}</Route>
          <Route path="/movies">{/* <Movie /> */}</Route>
          <Route path="/new_popular">{/* <NewPopular /> */}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
