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
          image={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : "no image"
          }
          published={book.volumeInfo.publishedDate}
          isbn={
            book.volumeInfo.industryIdentifiers
              ? book.volumeInfo.industryIdentifiers[0].identifier
              : 0
          }
          category={
            book.volumeInfo.categories
              ? book.volumeInfo.categories[0]
              : "no genre"
          }
          addToLibrary={props.addToLibrary}
        />
      );
    });
  } else {
    return <div className="add_warning"> Sorry, no books found!</div>;
  }
}
