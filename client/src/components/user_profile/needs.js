import React, { useState, useEffect } from "react";
import LibraryItem from "./LibraryItem";
import axios from "axios";

export default function Needs({ id, mode }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/needs", {
        params: {
          user_id: id,
        },
      })
      .then((results) => {
        setBooks(results.data);
      });
  }, [id]);

  return books.map((book) => {
    return (
      <div>
        <LibraryItem
          name={book.name}
          author={book.author}
          img={book.image}
          mode={mode}
        />
      </div>
    );
  });
}
