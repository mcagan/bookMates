import React from "react";
// import Image from "react-bootstrap/Image";

export default function AddBookItem(props) {
  if (props.published) {
    return (
      <article className="book">
        <img className="book__thumbnail" src={props.image} alt="Book" />
        <div className="book__info">
          <div className="book__name">{props.name}</div>
          <div className="book__artist">
            Author(s): {props.author ? props.author.join(",  ") : "no author"}
          </div>
          <div className="book__artist">
            Year published:{" "}
            {props.published === "0000"
              ? "Not available"
              : props.published.substring(0, 4)}
          </div>
        </div>
        <div className="result_border_line"></div>
        <button
          class="btn btn-dark"
          id="add-button"
          onClick={(e) => {
            e.preventDefault();
            props.addToLibrary({
              name: props.name,
              author: props.author,
              image: props.image,
              genre: props.category,
            });
          }}
        >
          + Add to Library
        </button>
        <button
          class="btn btn-dark"
          id="add-button"
          onClick={(e) => {
            e.preventDefault();
            props.addToNeeds({
              name: props.name,
              author: props.author,
              image: props.image,
              genre: props.category,
            });
          }}
        >
          + Add to Needs
        </button>
      </article>
    );
  } else {
    return <div></div>;
  }
}
