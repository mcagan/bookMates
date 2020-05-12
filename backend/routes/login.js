const express = require("express");
const router = express.Router();

module.exports = ({ getUserByEmail }) => {
  router.post("/", (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    getUserByEmail(email)
      .then((result) => {
        if (result[0].password === password) {
          res.json(result[0]);
        } else {
          res.json("Wrong email or password");
        }
      })
      .catch((err) => console.log(`Error retrieving data: ${err.message}`));
  });
  return router;
};
