import React from "react";
import Image from "react-bootstrap/Image";

export default function Book(props) {
  return (
    <article className="book">
      <img className="book__thumbnail" src={props.image} alt="Book" thumbnail />
      <div className="book__info">
        <div className="book__name">{props.name}</div>
        <div className="book__artist">{props.author}</div>
      </div>
      <button class="btn btn-dark" id="add-button">
        Add
      </button>
    </article>
  );
}
