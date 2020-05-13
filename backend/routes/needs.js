const express = require("express");
const router = express.Router();

module.exports = ({ getNeedsForUser }) => {
  router.get("/", function (req, res) {
    console.log("I'm the req", req.query.user_id);
    getNeedsForUser(req.query.user_id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log(`Error retrieving data: ${err.message}`));
  });

  return router;
};
