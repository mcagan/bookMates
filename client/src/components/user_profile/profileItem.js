import React from "react";
import Avatar1 from "../../assets/docs/avataar_1.png";
import Avatar2 from "../../assets/docs/avataar_2.png";
import Avatar3 from "../../assets/docs/avataar_3.png";
import Avatar4 from "../../assets/docs/avataar_4.png";
import Avatar5 from "../../assets/docs/avataar_5.png";

export default function ProfileItem(props) {
  return (
    <div>
      <div id="profile-box">
        {props.avatar === "Avatar1" && (
          <img className="profile_img" src={Avatar1}></img>
        )}
        {props.avatar === "Avatar2" && (
          <img className="profile_img" src={Avatar2}></img>
        )}
        {props.avatar === "Avatar3" && (
          <img className="profile_img" src={Avatar3}></img>
        )}
        {props.avatar === "Avatar4" && (
          <img className="profile_img" src={Avatar4}></img>
        )}
        {props.avatar === "Avatar5" && (
          <img className="profile_img" src={Avatar5}></img>
        )}
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
        <button className="button_header" onClick={() => props.setLibrary()}>
          My Library
        </button>
        <button className="button_header" onClick={() => props.setNeeds()}>
          My Needs
        </button>
        <button className="button_header" onClick={() => props.setExplore()}>
          Explore
        </button>
        <button className="button_header" onClick={() => props.setChat()}>
          Chat
        </button>
      </div>
      <div className="header_underline"></div>
      <div id="profile-other-info">
        <div id="about-me">
          <h2 className="about_me_heading">About me</h2>
          <div className="about_text">{props.about_me}</div>
        </div>
        {/* <div id="contact-me">
          <h2 className="contact_me_heading">
            Contact me <i class="fa fa-comments"></i>
          </h2>
        </div> */}
      </div>
    </div>
  );
}
