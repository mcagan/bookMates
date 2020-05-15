import React from "react";

import BookItem from "./BookItem";

export default function BookList(props) {
  const { results } = props;

  if (results && results.length > 0) {
    return results.map((book) => {
      return (
        <BookItem
          key={book.book_id}
          name={book.name}
          author={book.author}
          image={book.image}
          username={book.username}
          location={book.location}
          // published={book.volumeInfo.publishedDate}
          // isbn={
          //   book.volumeInfo.industryIdentifiers
          //     ? book.volumeInfo.industryIdentifiers[0].identifier
          //     : 0
          // }
          // category={
          //   book.volumeInfo.categories
          //     ? book.volumeInfo.categories[0]
          //     : "no genre"
          // }
          // addToLibrary={props.addToLibrary}
        />
      );
    });
  } else {
    return <div className="add_warning"> Sorry, no books found!</div>;
  }
}
