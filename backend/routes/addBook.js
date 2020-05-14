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
    const { name, author, image, isbn, genre } = req.body.book;
    const user = req.body.user;
    getBookByName(name).then((result) => {
      if (result.length >= 1) {
        console.log("book found");
        return addToLibrary({ book_id: result[0].id, owner_id: user });
      } else {
        getGenreByName(genre)
          .then((result2) => {
            if (result2.length >= 1) {
              console.log("genre found", result2[0]);
              addBookToDatabase({
                name: name,
                author: author[0],
                image: image,
                genre_id: result2[0].id,
              }).then((result) => {
                console.log("book id", result[0]);
                console.log("owner id", user);
                return addToLibrary({ book_id: result[0], owner_id: user });
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
              ).then((result) => {
                console.log("book id", result[0]);
                console.log("owner id", user);
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
