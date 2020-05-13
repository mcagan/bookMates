import React, { useState } from "react";
import Home from "./components/Home";
import "./App.css";
import LiveSearch from "./components/search/LiveSearch";
import SignUpContainer from "./components/signup/SignUpContainer";
import Profile from "./components/user_profile/profile";
import { Switch, Route, Link } from "react-router-dom";
import LoginContainer from "./components/login/LoginContainer";
import Library from "./components/user_profile/Library";

function App() {
  const [state, setState] = useState({
    currentUser: {
      id: 1,
      first_name: "SpongeBob",
      last_name: "Squarepants",
      username: "Spongy",
      email: "bob@sq.com",
      password: "test",
      location: "Montreal",
      occupation: "Student",
      about_me: "Lives in a pineapple under the sea",
      avatar:
        "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairDreads&accessoriesType=Blank&hairColor=PastelPink&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Brown",
      created_at: "2020-05-13T18:21:56.445Z",
      updated_at: "2020-05-13T18:21:56.445Z",
    },
  });

  const userLogin = (userObj) => {
    setState({ ...state, currentUser: userObj });
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <SignUpContainer userLogin={userLogin} />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/livesearch">
          <LiveSearch />
        </Route>
        <Route path="/login">
          <LoginContainer userLogin={userLogin} />
        </Route>
        <Route path="/library">
          <Library id={state.currentUser.id} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
