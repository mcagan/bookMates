import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import BookList from "./BookList";

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  // const [sort, setSort] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (term.length > 0) {
      axios
        .get(`http://localhost:3001/api/books/search?TERM=${term}`)
        .then((response) => {
          setResults([]);
          setResults(response.data);
          setSearched(true);
        });
    } else {
      setSearched(false);
    }
  }, [term]);

  const filteredResults = (resultsArray) => {
    return resultsArray.filter(
      (book) => book.username !== props.currentUsername
    );
  };

  const bookResult = results ? results : [];

  return (
    <Fragment>
      <header>
        <h1 className="start_exp">
          Start Exploring<i class="fa fa-compass"></i>
        </h1>
        <br />
        <h4 className="start_exp2">Find books in your community!</h4>
      </header>
      <main>
        <SearchBar onSearch={(term) => setTerm(term)} />
        {searched && (
          <BookList
            results={filteredResults(bookResult)}
            setChat={props.setChat}
          />
        )}
        <button className="btn_done" type="button" onClick={() => props.done()}>
          Done
        </button>
      </main>
    </Fragment>
  );
}
