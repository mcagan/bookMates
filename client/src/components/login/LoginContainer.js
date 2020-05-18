import React, { useState } from "react";
import LoginForm from "./LoginForm";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function LoginContainer({ userLogin }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [mode, setMode] = useState("");
  const error = "ERROR";
  const validateUser = function (email, password) {
    axios
      .post("http://localhost:3001/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data === "Wrong email or password") {
          setMode(error);
        } else {
          userLogin(response.data);
          setLoggedIn(true);
        }
        console.log(mode);
      });
  };

  if (isLoggedIn === true) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <LoginForm onSubmit={validateUser} mode={mode} />
    </div>
  );
}
