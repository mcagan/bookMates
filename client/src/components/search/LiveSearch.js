import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import BookList from "./BookList";

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [sort, setSort] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${term}`)
      .then((response) => {
        console.log(response.data.items);
        setResults(response.data.items);
        setSearched(true);
      });
  }, [term]);

  const handleSort = (event) => setSort(event.target.value);

  const sortedBooks = results
    ? results.sort((a, b) => {
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
      })
    : [];

  const addToLibrary = (book) => {
    axios
      .post("http://localhost:3001/api/books/add", {
        book: book,
        user: props.user,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <Fragment>
      <header>
        <h1>
          Start Exploring<i class="fa fa-compass"></i>
        </h1>
        <br />
        <h4>Find books in your community!</h4>
      </header>
      <main>
        <SearchBar handleSort={handleSort} onSearch={(term) => setTerm(term)} />
        {searched && (
          <BookList addToLibrary={addToLibrary} results={sortedBooks} />
        )}
        <button className="btn_done" type="button">
          Done
        </button>
      </main>
    </Fragment>
  );
}
