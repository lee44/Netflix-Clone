import React from "react";
import "./css/App.css";
import Row from "./components/Row";
import requests from "./utils/requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      {/* <Row
        isLargeRow
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      /> */}
      <Row title="Trending" fetchUrl={requests.trending} />
      <Row title="Action" fetchUrl={requests.action} />
      <Row title="Comedy" fetchUrl={requests.comedy} />
      <Row title="Horror" fetchUrl={requests.horror} />
      <Row title="Romance" fetchUrl={requests.romance} />
      <Row title="Documentary" fetchUrl={requests.documentary} />
    </div>
  );
}

export default App;
