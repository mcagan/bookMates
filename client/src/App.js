import React from "react";
import Home from "./components/Home";
import "./App.css";
import "./Search.css";
import LiveSearch from "./components/search/LiveSearch";
import "./SignUpForm.css";
import SignUpContainer from "./components/signup/SignUpContainer";

function App() {
  return (
    <div className="App">
      {/* <SignUpContainer /> */}
      <LiveSearch />
      {/* <Home /> */}
    </div>
  );
}

export default App;
