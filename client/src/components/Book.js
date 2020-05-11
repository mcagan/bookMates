import React from "react";

export default function Book(props) {
  return (
    <article className="book">
      <img className="book__thumbnail" src={props.artworkUrl100} alt="Book" />
      <div className="book__info">
        <div className="book__name">{props.collectionName}</div>
        <div className="book__artist">{props.artistName}</div>
      </div>
    </article>
  );
}
