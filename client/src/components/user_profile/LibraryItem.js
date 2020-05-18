import React, { Fragment } from "react";

export default function LibraryItem({ name, author, img }) {
  return (
    <div className="library-item">
      <img className="book_item_img" src={img} alt={name} />
      <div className="book-info">
        <div className="book_name">{name}</div>
        <div className="book_author">Author(s): {author}</div>
      </div>
      <button type="add" className="add-book">
        Available to Exchange
      </button>
    </div>
  );
}
