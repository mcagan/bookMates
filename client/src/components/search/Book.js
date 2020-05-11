import React from "react";

export default function Book(props) {
  return (
    <article className="book">
      <img className="book__thumbnail" src={props.image} alt="Book" />
      <div className="book__info">
        <div className="book__name">{props.name}</div>
        <div className="book__artist">{props.author}</div>
      </div>
      <button>Add</button>
    </article>
  );
}
