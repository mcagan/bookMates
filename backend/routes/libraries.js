const express = require("express");
const router = express.Router();

module.exports = ({ getLibraries }) => {
  router.get("/", function (req, res) {
    getLibraries()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log(`Error retrieving data: ${err.message}`));
  });

  return router;
};
