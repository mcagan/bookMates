import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./AddSearchBar";
import BookList from "./AddBookList";

export default function AddLiveSearch(props) {
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

  return (
    <Fragment>
      <header>
        <h1 class="add_header">
          Add books to your library! &#128512;<i class="fa fa-grin"></i>
        </h1>
        <br />
      </header>
      <main>
        <SearchBar handleSort={handleSort} onSearch={(term) => setTerm(term)} />
        {searched && <BookList results={sortedBooks} />}
        <button className="btn_done" type="button">
          Done
        </button>
      </main>
    </Fragment>
  );
}
