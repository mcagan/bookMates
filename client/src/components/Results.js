import React from "react";

import Book from "./Book";

export default function Results(props) {
  const { results } = props;

  return results.map((user) => {
    return (
      <Book username={user.username} email={user.email} avatar={user.avatar} />
    );
  });
}
