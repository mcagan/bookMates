const express = require("express");
const router = express.Router();

module.exports = ({
  getBookByName,
  getGenreByName,
  addBookToDatabase,
  addGenreAndBookToDatabase,
  addToLibrary,
}) => {
  router.post("/", (req, res) => {
    const { name, author, image, genre } = req.body.book;
    const user = req.body.user;
    getBookByName(name).then((result) => {
      if (result.length >= 1) {
        return addToLibrary({ book_id: result[0].id, owner_id: user });
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
                return addToLibrary({ book_id: result[0], owner_id: user });
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
                return addToLibrary({ book_id: result[0], owner_id: user });
              });
            }
          })

          .catch((err) => console.log(`Error retrieving data: ${err.message}`));
      }
    });
  });
  return router;
};
