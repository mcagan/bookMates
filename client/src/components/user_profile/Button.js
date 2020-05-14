import React from "react";

const Button = (props) => {
  return (
    <button className="add_to_library" onClick={() => props.setLiveSearch()}>
      {props.title}
    </button>
  );
};

export default Button;
