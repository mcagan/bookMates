import React, { useState, useEffect } from "react";
import LibraryItem from "./LibraryItem";
import axios from "axios";

export default function Needs({ id }) {
  console.log("in the needs");
  const [books, setBooks] = useState([]);
  useEffect(() => {
    console.log("in the use effect");
    axios
      .get("http://localhost:3001/api/needs", {
        params: {
          user_id: id,
        },
      })
      .then((results) => {
        console.log(results.data);
        setBooks(results.data);
      });
  }, []);

  return books.map((book) => {
    return (
      <div>
        <LibraryItem name={book.name} author={book.author} img={book.image} />
      </div>
    );
  });
}
