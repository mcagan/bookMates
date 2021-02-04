const express = require("express");
const router = express.Router();

module.exports = ({ getBooks }) => {
  router.get("/", function (req, res) {
    getBooks()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log(`Error retrieving data: ${err.message}`));
  });

  return router;
};
