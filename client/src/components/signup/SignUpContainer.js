import React, { useState } from "react";
import SignUpForm from "./SignUpForm.js";
import axios from "axios";

export default function SignUpContainer({ userLogin }) {
  const addUser = function (user) {
    console.log("I AM A USER:", user);
    axios
      .post("http://localhost:3001/api/signup", {
        user: user,
      })
      .then((response) => {
        console.log("POST RESPONSE:", response);
        if (response.status === 200) {
          userLogin(user);
        } else {
          console.log(response);
        }
      });
  };
  return (
    <div>
      <SignUpForm onSubmit={addUser} />
    </div>
  );
}
