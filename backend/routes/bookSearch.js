const express = require("express");
const router = express.Router();

module.exports = ({ bookSearch }) => {
  router.get("/", function (req, res) {
    const term = req.query.TERM.toLowerCase();
    bookSearch(term)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log(`Error retrieving data: ${err.message}`));
  });

  return router;
};
