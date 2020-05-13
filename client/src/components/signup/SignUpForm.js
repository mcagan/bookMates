import React, { useState } from "react";
import Logo from "../../assets/docs/bookmates.png";

export default function SignUpForm(props) {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    location: "",
    occupation: "",
    about_me: "",
  });
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </nav>
      <div className="login-box">
        <p className="sign-up-step"> STEP 1</p>
        <h1>Sign Up</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.onSubmit(user);
          }}
        >
          <input
            placeholder="First Name"
            name="first-name"
            value={user.first_name}
            onChange={(e) => setUser({ ...user, first_name: e.target.value })}
          />
          <input
            placeholder="Last Name"
            name="last-name"
            value={user.last_name}
            onChange={(e) => setUser({ ...user, last_name: e.target.value })}
          />
          <input
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <input
            placeholder="Password Confirmation"
            name="password-confirmation"
            value={user.password_confirmation}
            onChange={(e) =>
              setUser({ ...user, password_confirmation: e.target.value })
            }
          />
          <input
            placeholder="Location"
            name="location"
            value={user.location}
            onChange={(e) => setUser({ ...user, location: e.target.value })}
          />
          <input
            placeholder="Occupation"
            name="occupation"
            value={user.occupation}
            onChange={(e) => setUser({ ...user, occupation: e.target.value })}
          />
          <input
            placeholder="In a few sentences, tell us a bit about you"
            name="about me"
            value={user.about_me}
            onChange={(e) => setUser({ ...user, about_me: e.target.value })}
          />
          <br />
          <input className="submit" type="submit" value="SUBMIT" />
        </form>
        <p>
          Have an account already? <br />
          <a href="/login">Log in here</a>
        </p>
      </div>
    </React.Fragment>
  );
}
