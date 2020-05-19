import React, { useState } from "react";
import SignUpForm from "./SignUpForm.js";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function SignUpContainer({ userLogin }) {
  const [signedUp, setSignedUp] = useState(false);
  const addUser = function (user) {
    axios
      .post("http://localhost:3001/api/signup", {
        user: user,
      })
      .then((response) => {
        if (response.status === 200) {
          userLogin(user);
          setSignedUp(true);
        } else {
          console.log(response);
        }
      });
  };

  if (signedUp === true) {
    return <Redirect to="/profile" />;
  }
  return (
    <div>
      <SignUpForm onSubmit={addUser} />
    </div>
  );
}
