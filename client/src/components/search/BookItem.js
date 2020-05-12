import React from "react";
// import Image from "react-bootstrap/Image";

export default function BookItem(props) {
  return (
    <article className="book">
      <img className="book__thumbnail" src={props.image} alt="Book" />
      <div className="book__info">
        <div className="book__name">{props.name}</div>
        <div className="book__artist">
          Author(s): {props.author.join(",  ")}
        </div>
        <div className="book__artist">
          Year published:{" "}
          {props.published === "0000"
            ? "Not available"
            : props.published.substring(0, 4)}
        </div>
      </div>
      <button class="btn btn-dark" id="add-button">
        Request Exchange
      </button>
    </article>
  );
}
