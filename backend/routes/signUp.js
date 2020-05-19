const express = require("express");
const router = express.Router();

module.exports = ({ getUserByEmail, addUserToDatabase }) => {
  router.post("/", (req, res) => {
    const {
      first_name,
      last_name,
      username,
      email,
      password,
      password_confirmation,
      location,
      occupation,
      about_me,
    } = req.body.user;
    getUserByEmail(email)
      .then((result) => {
        if (result === true) {
          res.json("A user with this email already exists");
        } else if (password === password_confirmation) {
          const num = Math.floor(Math.random() * 5) + 1;
          const avatar = `Avatar${num}`;
          addUserToDatabase({
            first_name,
            last_name,
            username,
            email,
            password,
            location,
            occupation,
            about_me,
            avatar,
          })
            .then(function (result) {
              res.json({ success: true, message: "ok" }); // respond back to request
            })
            .catch((err) =>
              console.log(`Error retrieving data: ${err.message}`)
            );
        } else {
          res.json("Password needs to match password confirmation");
        }
      })
      .catch((err) => console.log(`Error retrieving data: ${err.message}`));
  });
  return router;
};
