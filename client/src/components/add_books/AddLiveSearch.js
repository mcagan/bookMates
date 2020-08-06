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
    if (term.length > 0) {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${term}`)
        .then((response) => {
          console.log(response.data.items);
          setResults(response.data.items);
          setSearched(true);
        });
    } else {
      setSearched(false);
    }
  }, [term]);

  const handleSort = (event) => setSort(event.target.value);

  const sortedBooks = results
    ? results.sort((a, b) => {
        if (sort === "Newest") {
          return (
            parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
            parseInt(a.volumeInfo.publishedDate.substring(0, 4))
          );
        } else {
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

  const addToNeeds = (book) => {
    axios
      .post("http://localhost:3001/api/needs/add", {
        book: book,
        user: props.user,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <Fragment>
      <div class="add_header">
        Add books to your library or needs!{" "}
        <span role="img" aria-label="emoji">
          &#128512;
        </span>
        <i class="fa fa-grin"></i>
      </div>
      <br />
      <div>
        <main>
          <SearchBar
            handleSort={handleSort}
            onSearch={(term) => setTerm(term)}
          />
          {searched && (
            <BookList
              addToLibrary={addToLibrary}
              addToNeeds={addToNeeds}
              results={sortedBooks}
            />
          )}
          <button
            className="btn_done"
            type="button"
            onClick={() => props.done()}
          >
            Done
          </button>
        </main>
      </div>
    </Fragment>
  );
}
