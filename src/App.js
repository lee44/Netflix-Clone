import React from "react";
import "./css/App.css";
import Row from "./components/Row";
import requests from "./utils/requests";
import category from "./utils/category";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner category={category.originals} fetchUrl={requests.originals} />
      {/* <Row
        isLargeRow
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      /> */}
      <Row category={category.trending} fetchUrl={requests.trending} />
      <Row category={category.action} fetchUrl={requests.action} />
      <Row category={category.comedy} fetchUrl={requests.comedy} />
      <Row category={category.horror} fetchUrl={requests.horror} />
      <Row category={category.romance} fetchUrl={requests.romance} />
      <Row category={category.documentary} fetchUrl={requests.documentary} />
    </div>
  );
}

export default App;
