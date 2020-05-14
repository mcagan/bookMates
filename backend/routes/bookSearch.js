const express = require("express");
const router = express.Router();

module.exports = ({ bookSearch }) => {
  router.get("/", function (req, res) {
    const { term } = req.body;
    bookSearch(term)
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => console.log(`Error retrieving data: ${err.message}`));
  });

  return router;
};
