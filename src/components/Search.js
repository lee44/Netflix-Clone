import React from "react";
import requests from "../utils/requests";
import { selectAll, selectStatus } from "../redux/mediaSlice";
import Result from "./Result";

function Search() {
  return (
    <div>
      <Result selector={selectAll} />
    </div>
  );
}

export default Search;
