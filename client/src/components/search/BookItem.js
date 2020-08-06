import React from "react";
// import Image from "react-bootstrap/Image";

export default function BookItem(props) {
  return (
    <article className="book">
      <img className="book__thumbnail" src={props.image} alt="Book" />
      <div className="book__info">
        <div className="book__name">{props.name}</div>
        <div className="book__artist">Author(s): {props.author}</div>
        <div>
          Owned by {props.username} in {props.location}
        </div>
      </div>
      <div className="result_border_line"></div>
      <button
        type="submit"
        class="btn btn-dark"
        id="add-button"
        onClick={() => props.setChat()}
      >
        {" "}
        Message
      </button>
    </article>
  );
}
