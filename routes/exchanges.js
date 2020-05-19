const express = require("express");
const router = express.Router();

module.exports = ({ getExchanges }) => {
  router.get("/", function (req, res) {
    getExchanges()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log(`Error retrieving data: ${err.message}`));
  });

  return router;
};
