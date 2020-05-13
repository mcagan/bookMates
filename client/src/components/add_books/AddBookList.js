import React from "react";

import BookItem from "./AddBookItem";

export default function AddBookList(props) {
  const { results } = props;

  if (results && results.length > 0) {
    return results.map((book) => {
      return (
        <BookItem
          key={book.id}
          name={book.volumeInfo.title}
          author={book.volumeInfo.authors}
          image={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : "no image"
          }
          published={book.volumeInfo.publishedDate}
        />
      );
    });
  } else {
    return <div className="add_warning"> Sorry, no books found!</div>;
  }
}
