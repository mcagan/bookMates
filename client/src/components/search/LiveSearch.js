import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import BookList from "./BookList";

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${term}`)
      .then((response) => {
        console.log(response.data.items);
        setResults(response.data.items);
      });
  }, [term]);

  const handleSort = (event) => setSort(event.target.value);

  const sortedBooks = results.sort((a, b) => {
    if (sort === "Newest") {
      return (
        parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(a.volumeInfo.publishedDate.substring(0, 4))
      );
    } else if (sort === "Oldest") {
      return (
        parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(b.volumeInfo.publishedDate.substring(0, 4))
      );
    }
  });

  return (
    <Fragment>
      <header>
        <h1>Start Exploring!</h1>
        <br />
        <h4>Find books in your community!</h4>
      </header>
      <main>
        <SearchBar handleSort={handleSort} onSearch={(term) => setTerm(term)} />
        <BookList results={sortedBooks} />
      </main>
    </Fragment>
  );
}
