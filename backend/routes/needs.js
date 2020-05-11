const express = require("express");
const router = express.Router();

module.exports = ({ getNeeds }) => {
  router.get("/", function (req, res) {
    getNeeds()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log(`Error retrieving data: ${err.message}`));
  });

  return router;
};
