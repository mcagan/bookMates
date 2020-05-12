import React from "react";

import BookItem from "./BookItem";

export default function BookList(props) {
  const { results } = props;

  if (results && results.length > 0) {
    return results.map((book) => {
      return (
        <BookItem
          key={book.id}
          name={book.volumeInfo.title}
          author={book.volumeInfo.authors}
          image={book.volumeInfo.imageLinks.thumbnail}
          published={book.volumeInfo.publishedDate}
        />
      );
    });
  } else {
    return <div> Sorry, no books found!</div>;
  }
}
