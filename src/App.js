import React from "react";
import "./css/App.css";
import Row from "./components/Row";
import requests from "./utils/requests";
import category from "./utils/category";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
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
} from "./redux/movieSlice";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner
        category={category.originals}
        fetchUrl={requests.originals}
        selectorMovie={selectOriginals}
        selectorStatus={selectOriginalStatus}
      />
      {/* <Row
        isLargeRow
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      /> */}
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
    </div>
  );
}

export default App;
