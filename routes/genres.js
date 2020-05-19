const express = require("express");
const router = express.Router();

module.exports = ({ getGenres }) => {
  router.get("/", function (req, res) {
    getGenres()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log(`Error retrieving data: ${err.message}`));
  });

  return router;
};
