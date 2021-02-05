import React from "react";

import BookItem from "./BookItem";

export default function BookList(props) {
  const { results } = props;

  if (results && results.length > 0) {
    return results.map((book, index) => {
      console.log(index);
      return (
        <BookItem
          key={index}
          name={book.name}
          author={book.author}
          image={book.image}
          username={book.username}
          location={book.location}
          setChat={props.setChat}
        />
      );
    });
  } else {
    return <div className="add_warning"> Sorry, no books found!</div>;
  }
}
