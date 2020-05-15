const express = require("express");
const router = express.Router();

module.exports = ({ bookSearch, getUsersForBook }) => {
  router.get("/", function (req, res) {
    const term = req.query.TERM.toLowerCase();
    bookSearch(term)
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => console.log(`Error retrieving data: ${err.message}`));
  });

  return router;
};
