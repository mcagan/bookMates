import React from "react";

const Navbar = (props) => {
  return (
    <nav id="profile-navbar">
      <div className="logged_in_as">Logged in as: {props.username}</div>
      <button className="logout-button" onClick={() => props.logout()}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
