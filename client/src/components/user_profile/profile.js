import React, { useState, useEffect, Fragment } from "react";
import ProfileItem from "./profileItem";
import Library from "./Library";
import Needs from "./Needs";
import LiveSearch from "../search/LiveSearch";
import Button from "./Button";
import AddLiveSearch from "../add_books/AddLiveSearch";

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
  const addLiveSearch = "ADD LIVE SEARCH";

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

  const setLiveSearch = () => {
    setMode(addLiveSearch);
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
      {mode === library && (
        <Button
          title={"+ Add new book to library"}
          setLiveSearch={setLiveSearch}
        />
      )}
      {mode === needs && (
        <Button
          title={"+ Add new book to needs"}
          setLiveSearch={setLiveSearch}
        />
      )}
      {mode === library && <Library id={id} />}
      {mode === needs && <Needs id={id} />}
      {mode === addLiveSearch && <AddLiveSearch user={id} />}
      {mode === explore && <LiveSearch user={id} />}
    </Fragment>
  );
}
