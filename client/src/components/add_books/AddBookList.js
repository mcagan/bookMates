import React from "react";

import BookItem from "./AddBookItem";

export default function AddBookList(props) {
  const { results } = props;

  if (results && results.length > 0) {
    return results.map((book) => {
      return (
        <BookItem
          addToLibrary={props.addToLibrary}
          addToNeeds={props.addToNeeds}
          key={book.id}
          name={book.volumeInfo.title}
          author={book.volumeInfo.authors}
          image={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : "no image"
          }
          published={book.volumeInfo.publishedDate}
          category={
            book.volumeInfo.categories
              ? book.volumeInfo.categories[0]
              : "no genre"
          }
        />
      );
    });
  } else {
    return <div className="add_warning"> Sorry, no books found!</div>;
  }
}
