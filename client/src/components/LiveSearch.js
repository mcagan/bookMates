import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import Results from "./Results";

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://itunes.apple.com/search?term=${term}e&country=CA&media=music&entity=album&attribute=artistTerm`
      )
      .then((response) => {
        setResults(response.data.results);
      });
  }, [term]);

  return (
    <Fragment>
      <header className="logo">
        <img src="images/brand.png" alt="Brand" />
      </header>
      <main>
        <SearchBar onSearch={(term) => setTerm(term)} />
        <Results results={results} />
      </main>
    </Fragment>
  );
}
