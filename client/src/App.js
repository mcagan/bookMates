import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./SignUpForm.css";
import SignUpContainer from "./components/SignUpContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SignUpContainer />
    </div>
  );
}

export default App;
