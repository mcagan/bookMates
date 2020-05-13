const express = require("express");
const router = express.Router();

module.exports = ({
  getBookByName,
  getGenreByName,
  addBookToDatabase,
  addGenreToDatabase,
}) => {
  router.post("/", (req, res) => {
    const { name, author, image, isbn, genre } = req.body.book;
    getBookByName(name).then((result) => {
      console.log("result 1", result);
      if (result === true && result.isbn === isbn) {
        return true;
      } else {
        getGenreByName(genre)
          .then((result2) => {
            if (result2 === true) {
              addBookToDatabase({
                name: name,
                author: author[0],
                image: image,
                isbn: isbn,
                genre: result2[0].id,
              });
            } else {
              const newGenre = addGenreToDatabase({ name: genre });
              addBookToDatabase({
                name: name,
                author: author[0],
                image: image,
                isbn: isbn,
                genre: newGenre.id,
              });
            }
          })
          .catch((err) => console.log(`Error retrieving data: ${err.message}`));
      }
    });
  });
  return router;
};
