import React, { useState, useEffect, useCallback } from "react";

import useDebounce from "../../hooks/useDebounce";

export default function SearchBar(props) {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);

  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  return (
    <section className="search">
      <form
        className="search__form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          className="radius"
          spellCheck="false"
          placeholder="Search for Books"
          name="search"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <select defaultValue="Sort" onChange={props.handleSort}>
          <option disabled value="Sort">
            Sort
          </option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </form>
    </section>
  );
}
