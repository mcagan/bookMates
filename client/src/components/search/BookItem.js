import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Image from "react-bootstrap/Image";

export default function BookItem(props) {
  return (
    <article className="book">
      <img className="book__thumbnail" src={props.image} alt="Book" />
      <div className="book__info">
        <div className="book__name">{props.name}</div>
        <div className="book__artist">Author(s): {props.author}</div>
        {/* <div className="book__artist">
            Year published:{" "}
            {props.published === "0000"
              ? "Not available"
              : props.published.substring(0, 4)}
          </div> */}
        <div>
          Owned by {props.username} in {props.location}
        </div>
      </div>
      <div className="result_border_line"></div>
      <Link onClick={(event) => event.preventDefault()} to={"/chat"}>
        <button class="btn btn-dark" id="add-button">
          Message
        </button>
      </Link>
    </article>
  );
}
