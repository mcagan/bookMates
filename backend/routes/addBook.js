const express = require("express");
const router = express.Router();

module.exports = ({
  getBookByName,
  getGenreByName,
  addBookToDatabase,
  addGenreAndBookToDatabase,
}) => {
  router.post("/", (req, res) => {
    const { name, author, image, isbn, genre, user } = req.body.book;
    getBookByName(name).then((result) => {
      if (result.length >= 1) {
        console.log("book found");
        return true;
      } else {
        getGenreByName(genre)
          .then((result2) => {
            if (result2.length >= 1) {
              console.log("genre found");
              addBookToDatabase({
                name: name,
                author: author[0],
                image: image,
                isbn: isbn,
                genre: result2[0].id,
              });
            } else {
              addGenreAndBookToDatabase(
                { name: genre },
                {
                  name: name,
                  author: author[0],
                  image: image,
                  isbn: isbn,
                },
                user
              ).then(() => {
                return true;
              });
            }
          })

          .catch((err) => console.log(`Error retrieving data: ${err.message}`));
      }
    });
  });
  return router;
};
