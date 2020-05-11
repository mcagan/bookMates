import React from "react";

export default function Book(props) {
  return (
    <article className="book">
      <img className="book__thumbnail" src={props.avatar} alt="Book" />
      <div className="book__info">
        <div className="book__name">{props.username}</div>
        <div className="book__artist">{props.email}</div>
      </div>
      <button>Add</button>
    </article>
  );
}
