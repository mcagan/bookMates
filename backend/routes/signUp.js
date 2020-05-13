const express = require("express");
const router = express.Router();

module.exports = ({ getUserByEmail, addUserToDatabase }) => {
  router.post("/", (req, res) => {
    console.log(req.body);
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
        console.log("in the then");
        console.log("RESULT FROM FORM", result);
        if (result === true) {
          res.json("A user with this email already exists");
        }
        if (password === password_confirmation) {
          console.log("IM IN THE ELSEIF");
          addUserToDatabase({
            id: 4,
            first_name,
            last_name,
            username,
            email,
            password,
            location,
            occupation,
            about_me,
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
