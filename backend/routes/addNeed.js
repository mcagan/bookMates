const express = require("express");
const router = express.Router();

module.exports = ({
  getBookByName,
  getGenreByName,
  addBookToDatabase,
  addGenreAndBookToDatabase,
  addToNeeds,
}) => {
  router.post("/", (req, res) => {
    const { name, author, image, isbn, genre } = req.body.book;
    const user = req.body.user;
    getBookByName(name).then((result) => {
      if (result.length >= 1) {
        return addToNeeds({ book_id: result[0].id, user_id: user });
      } else {
        getGenreByName(genre)
          .then((result2) => {
            if (result2.length >= 1) {
              addBookToDatabase({
                name: name,
                author: author[0],
                image: image,
                genre_id: result2[0].id,
              }).then((result) => {
                return addToNeeds({ book_id: result[0], user_id: user });
              });
            } else {
              addGenreAndBookToDatabase(
                { name: genre },
                {
                  name: name,
                  author: author[0],
                  image: image,
                }
              ).then((result) => {
                return addToNeeds({ book_id: result[0], user_id: user });
              });
            }
          })

          .catch((err) => console.log(`Error retrieving data: ${err.message}`));
      }
    });
  });
  return router;
};
