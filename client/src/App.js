import React, { useState } from "react";
import Home from "./components/Home";
import LiveSearch from "./components/search/LiveSearch";
import AddLiveSearch from "./components/add_books/AddLiveSearch";
import SignUpContainer from "./components/signup/SignUpContainer";
import Profile from "./components/user_profile/Profile";
import { Switch, Route } from "react-router-dom";
import LoginContainer from "./components/login/LoginContainer";
import Library from "./components/user_profile/Library";
import Needs from "./components/user_profile/Needs";
import useLocalStorage from "./hooks/localStorage";
import Chat from "./components/contact_me/Chat";

function App() {
  const {
    addToLocalStorage,
    getFromLocalStorage,
    removeFromLocalStorage,
  } = useLocalStorage();
  const [state, setState] = useState({
    currentUser: getFromLocalStorage("cachedUser") || {},
  });

  const userLogin = (userObj) => {
    setState({ ...state, currentUser: userObj });
    addToLocalStorage("cachedUser", userObj);
  };

  const userLogout = () => {
    removeFromLocalStorage("cachedUser");
    setState({ ...state, currentUser: {} });
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
          <Profile
            id={state.currentUser.id}
            username={state.currentUser.username}
            avatar={state.currentUser.avatar}
            location={state.currentUser.location}
            created_at={state.currentUser.created_at}
            about_me={state.currentUser.about_me}
            logout={userLogout}
          />
        </Route>
        <Route path="/livesearch">
          <LiveSearch user={state.currentUser.id} />
        </Route>
        <Route path="/addbook">
          <AddLiveSearch />
        </Route>
        <Route path="/login">
          <LoginContainer userLogin={userLogin} />
        </Route>
        <Route path="/library">
          <Library id={state.currentUser.id} />
        </Route>
        <Route path="/needs">
          <Needs id={state.currentUser.id} />
        </Route>
        <Route path="/chat">
          <Chat
            username={state.currentUser.username}
            user={state.currentUser.id}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
