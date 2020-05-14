import React, { useState, useEffect, Fragment } from "react";
import ProfileItem from "./profileItem";
import Library from "./Library";
import Needs from "./Needs";
import LiveSearch from "../search/LiveSearch";

export default function Profile({
  id,
  username,
  avatar,
  location,
  created_at,
  about_me,
}) {
  const library = "LIBRARY";
  const needs = "NEEDS";
  const explore = "EXPLORE";

  const [mode, setMode] = useState(library);

  const setLibrary = () => {
    setMode(library);
  };
  const setNeeds = () => {
    setMode(needs);
  };
  const setExplore = () => {
    setMode(explore);
  };
  console.log(id, username, location);

  return (
    <Fragment>
      <ProfileItem
        setLibrary={setLibrary}
        setNeeds={setNeeds}
        setExplore={setExplore}
        username={username}
        avatar={avatar}
        location={location}
        created_at={created_at}
        about_me={about_me}
      />
      {/* {mode === library && (
        <button className="add_to_library">Add new book to library</button>
      )}
      {mode === needs && (
        <button className="add_to_library">Add new book to needs</button>
      )} */}
      {mode === library && <Library id={id} />}
      {mode === needs && <Needs id={id} />}
      {mode === explore && <LiveSearch />}
    </Fragment>
  );
}
