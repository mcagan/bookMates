const express = require("express");
const router = express.Router();

module.exports = ({ getUsers }) => {
  router.get("/", function (req, res) {
    console.log("getting the users");
    getUsers()
      .then((result) => {
        console.log("in the result");
        res.json(result);
      })
      .catch((err) => console.log(`Error retrieving data: ${err.message}`));
  });

  return router;
};
