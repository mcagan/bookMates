import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form id="login-form" onSubmit={() => props.onSubmit(email, password)}>
      <input
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
