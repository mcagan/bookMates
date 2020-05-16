import React from "react";

const Navbar = (props) => {
  return (
    <nav
      class="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
      id="profile-navbar"
    >
      <div>Logged in as: {props.username}</div>
      <button className="logout-button" onClick={() => props.logout()}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
