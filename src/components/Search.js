import "../css/Search.css";
import React from "react";
import { selectSearch, selectSearchStatus } from "../redux/searchSlice";
import Row from "./Row";

function Search() {
  return (
    <>
      <Row
        category={"Results"}
        selectorMedia={selectSearch}
        selectorStatus={selectSearchStatus}
      />
    </>
  );
}

export default Search;
