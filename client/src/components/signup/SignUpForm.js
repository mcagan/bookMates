import React, { useState } from "react";

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
    <div className="loginBox">
      <h1>Sign Up</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit(user);
        }}
      >
        <input
          label="First Name"
          name="first-name"
          value={user.first_name}
          onChange={(e) => setUser({ ...user, first_name: e.target.value })}
        />
        <input
          label="Last Name"
          name="last-name"
          value={user.last_name}
          onChange={(e) => setUser({ ...user, last_name: e.target.value })}
        />
        <input
          label="Username"
          name="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          label="Email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          label="Password"
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input
          label="Password Confirmation"
          name="password-confirmation"
          value={user.password_confirmation}
          onChange={(e) =>
            setUser({ ...user, password_confirmation: e.target.value })
          }
        />
        <input
          label="Location"
          name="location"
          value={user.location}
          onChange={(e) => setUser({ ...user, location: e.target.value })}
        />
        <input
          label="Occupation"
          name="occupation"
          value={user.occupation}
          onChange={(e) => setUser({ ...user, occupation: e.target.value })}
        />
        <input
          label="About Me"
          name="about me"
          value={user.about_me}
          onChange={(e) => setUser({ ...user, about_me: e.target.value })}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p>
        Have an account already? <br />
        <a href="/login">Log in here</a>
      </p>
    </div>
  );
}
