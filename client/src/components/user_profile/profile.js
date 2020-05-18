import React, { useState, useEffect, Fragment } from "react";
import ProfileItem from "./profileItem";
import Library from "./Library";
import Needs from "./Needs";
import LiveSearch from "../search/LiveSearch";
import Button from "./Button";
import AddLiveSearch from "../add_books/AddLiveSearch";
import { Redirect } from "react-router-dom";
import Chat from "../contact_me/Chat";
import Navbar from "./Navbar";

export default function Profile({
  id,
  username,
  avatar,
  location,
  created_at,
  about_me,
  logout,
}) {
  console.log(id);
  const library = "LIBRARY";
  const needs = "NEEDS";
  const explore = "EXPLORE";
  const addLiveSearch = "ADD LIVE SEARCH";
  const chat = "CHAT";

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

  const setChat = () => {
    setMode(chat);
  };
  console.log(id, username, location);

  return id == undefined ? (
    <Redirect to="/login" />
  ) : (
    <Fragment>
      <Navbar username={username} logout={logout} />
      <ProfileItem
        setLibrary={setLibrary}
        setNeeds={setNeeds}
        setExplore={setExplore}
        setChat={setChat}
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
      {mode === needs && <Needs id={id} mode={mode} />}
      {mode === addLiveSearch && <AddLiveSearch user={id} done={setLibrary} />}
      {mode === explore && (
        <LiveSearch
          user={id}
          currentUsername={username}
          done={setLibrary}
          setChat={setChat}
        />
      )}
      {mode === chat && <Chat username={username} user={id} />}
    </Fragment>
  );
}
