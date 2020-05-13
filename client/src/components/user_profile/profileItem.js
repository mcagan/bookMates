import React from "react";

export default function ProfileItem(props) {
  return (
    <div>
      <div id="profile-box">
        <img src={props.avatar}></img>
        <h2>{props.username}</h2>
        <h4>{props.location}</h4>
        <h4>{props.created_at}</h4>
      </div>
      <div>
        <button onClick={() => props.setLibrary()}>My Library</button>
        <button onClick={() => props.setNeeds()}>My Needs</button>
        <button onClick={() => props.setExplore()}>Explore</button>
      </div>
      <div id="profile-other-info">
        <div id="about-me">
          <h2>ABOUT ME</h2>
          <h4>{props.about_me}</h4>
        </div>
        <div id="books-exchanged">
          <h2>TOTAL BOOKS EXCHANGED</h2>
          <h4>3</h4>
        </div>
        <div id="contact-me">
          <h2>CONTACT ME</h2>
        </div>
      </div>
    </div>
  );
}
