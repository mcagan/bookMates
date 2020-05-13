import React from "react";
import LoginForm from "./LoginForm";
import axios from "axios";

export default function LoginContainer({ userLogin }) {
  const validateUser = function (email, password) {
    console.log("Issue the login request");

    axios
      .post("http://localhost:3001/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        userLogin(response.data);
      });
  };

  return (
    <div>
      <LoginForm onSubmit={validateUser} />
    </div>
  );
}
