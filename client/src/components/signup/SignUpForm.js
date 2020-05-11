import React from "react";
import TextField from "@material-ui/core/TextField";

export default function SignUpForm(props) {
  return (
    <div className="loginBox">
      <h1>Sign Up</h1>
      <form onSubmit={props.onSubmit}>
        <TextField
          id="standard-secondary"
          label="First Name"
          color="secondary"
          name="first name"
          fullWidth={true}
        />
        <TextField
          id="standard-secondary"
          label="Last Name"
          color="secondary"
          name="last name"
          fullWidth={true}
        />
        <TextField
          id="standard-secondary"
          label="Username"
          color="secondary"
          name="username"
          fullWidth={true}
        />
        <TextField
          id="standard-secondary"
          label="Email"
          color="secondary"
          name="email"
          fullWidth={true}
        />
        <TextField
          id="standard-secondary"
          label="Password"
          color="secondary"
          name="password"
          fullWidth={true}
        />
        <TextField
          id="standard-secondary"
          label="Password Confirmation"
          color="secondary"
          name="password confirmation"
          fullWidth={true}
        />
        <TextField
          id="standard-secondary"
          label="Location"
          color="secondary"
          name="location"
          fullWidth={true}
        />
        <TextField
          id="standard-secondary"
          label="Occupation"
          color="secondary"
          name="occupation"
          fullWidth={true}
        />
        <TextField
          id="standard-secondary"
          label="About Me"
          color="secondary"
          name="about me"
          fullWidth={true}
        />
        <br />
        <button type="submit" label="submit">
          Submit
        </button>
      </form>
      <p>
        Have an account already? <br />
        <a href="/login">Log in here</a>
      </p>
    </div>
  );
}
