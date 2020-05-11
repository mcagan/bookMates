import React from "react";

import Book from "./Book";

export default function Results(props) {
  const { results } = props;

  return results.map((book) => {
    return <Book name={book.name} author={book.author} image={book.image} />;
  });
}
