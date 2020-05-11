import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import Results from "./Results";

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/books`).then((response) => {
      console.log(response);
      setResults(response.data);
    });
  }, [term]);

  return (
    <Fragment>
      <header>
        <h1>Start Exploring!</h1>
        <br />
        <h4>Find books in your community!</h4>
      </header>
      <main>
        <SearchBar onSearch={(term) => setTerm(term)} />
        <Results results={results} />
      </main>
    </Fragment>
  );
}
