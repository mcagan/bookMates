import React, { useState } from "react";
import Logo from "../../assets/docs/bookmates.png";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </nav>
      <div className="login-box">
        <h1>Login</h1>
        <form
          id="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            props.onSubmit(email, password);
          }}
        >
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
          <br />
          <input className="submit" type="submit" value="Submit" />
        </form>
        <p>
          Don't have an account? <br />
          <a href="/signup">Sign up here</a>
        </p>
      </div>
    </React.Fragment>
  );
}
