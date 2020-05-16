import React, { useState } from "react";
import LoginForm from "./LoginForm";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function LoginContainer({ userLogin }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const validateUser = function (email, password) {
    console.log("Issue the login request");

    axios
      .post("http://localhost:3001/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        userLogin(response.data);
        setLoggedIn(true);
      });
  };

  if (isLoggedIn === true) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <LoginForm onSubmit={validateUser} />
    </div>
  );
}
