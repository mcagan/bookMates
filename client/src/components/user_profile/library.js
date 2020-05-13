import React from "react";
import LibraryItem from "./LibraryItem";

export default function Library() {
  const books = [
    { name: "Book 1", author: "Author 1" },
    { name: "Book 2", author: "Author 2" },
  ];
  return books.map((book) => {
    return (
      <div>
        <LibraryItem name={book.name} author={book.author} img={book.image} />
      </div>
    );
  });
}
