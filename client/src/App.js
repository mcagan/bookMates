import React from "react";
import Home from "./components/Home";
import "./App.css";
import LiveSearch from "./components/search/LiveSearch";
import SignUpContainer from "./components/signup/SignUpContainer";
import Profile from "./components/user_profile/profile";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <SignUpContainer />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/livesearch">
          <LiveSearch />
        </Route>
        {/* <Route path="/login">
          <Login />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
