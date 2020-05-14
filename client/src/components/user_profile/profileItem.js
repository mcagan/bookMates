import React from "react";

export default function ProfileItem(props) {
  return (
    <div>
      <div id="profile-box">
        <img className="profile_img" src={props.avatar}></img>
        <h2 className="profile_username">{props.username}</h2>
        <div className="profile_location">
          <i class="fa fa-map-marker"></i>
          {props.location}
        </div>
        <div className="profile_creation">
          Member since: {props.created_at.substring(0, 10)}
        </div>
      </div>

      <div className="profile_header">
        <button onClick={() => props.setLibrary()}>My Library</button>
        <button onClick={() => props.setNeeds()}>My Needs</button>
        <button onClick={() => props.setExplore()}>Explore</button>
      </div>
      <div className="header_underline"></div>
      <div id="profile-other-info">
        <div id="about-me">
          <h2 className="about_me_heading">About me</h2>
          <div>{props.about_me}</div>
        </div>
        <div id="books-exchanged">
          <h2 className="books-exchanged_heading">Total books exchanged</h2>
          <div>3</div>
        </div>
        <div id="contact-me">
          <h2 className="contact_me_heading">
            Contact me <i class="fa fa-comments"></i>
          </h2>
        </div>
      </div>
    </div>
  );
}
