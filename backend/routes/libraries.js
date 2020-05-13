const express = require("express");
const router = express.Router();

module.exports = ({ getBooksForUser }) => {
  router.get("/", function (req, res) {
    console.log(req);
    getBooksForUser(req.query.user_id)
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => console.log(`Error retrieving data: ${err.message}`));
  });

  return router;
};
