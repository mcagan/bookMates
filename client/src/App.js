import React from "react";
import Home from "./components/Home";
import "./App.css";
import LiveSearch from "./components/search/LiveSearch";
import SignUpContainer from "./components/signup/SignUpContainer";
import Profile from "./components/user_profile/profile";

function App() {
  return (
    <div className="App">
      {/* <SignUpContainer /> */}
      {/* <LiveSearch /> */}
      {/* <Home /> */}
      <Profile />
    </div>
  );
}

export default App;
