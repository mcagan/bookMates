const express = require("express");
const router = express.Router();

module.exports = ({ getNeedsForUser }) => {
  router.get("/", function (req, res) {
    getNeedsForUser(req.query.user_id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log(`Error retrieving data: ${err.message}`));
  });

  return router;
};
