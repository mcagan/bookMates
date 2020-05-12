import React, { useState } from "react";
import Home from "./components/Home";
import "./App.css";
import LiveSearch from "./components/search/LiveSearch";
import SignUpContainer from "./components/signup/SignUpContainer";
import Profile from "./components/user_profile/profile";
import LoginContainer from "./components/LoginContainer";

function App() {
  const [state, setState] = useState({
    currentUser: {},
  });

  const userLogin = (userObj) => {
    setState({ ...state, currentUser: userObj });
  };

  return (
    <div className="App">
      {/* <SignUpContainer /> */}
      {/* <LiveSearch /> */}
      {/* <Home /> */}
      {/* <Profile /> */}
      <LoginContainer userLogin={userLogin} />
    </div>
  );
}

export default App;
