const express = require("express");
const router = express.Router();

module.exports = ({ getUsers }) => {
  router.get("/", function (req, res) {
    getUsers()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log(`Error retrieving data: ${err.message}`));
  });

  return router;
};
