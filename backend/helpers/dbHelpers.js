module.exports = (knex) => {
  const getUsers = () => {
    return knex.select("*").from("users");
  };
  const getGenres = () => {
    return knex.select("*").from("genres");
  };
  const getBooks = () => {
    return knex.select("*").from("books");
  };
  const getExchanges = () => {
    return knex.select("*").from("exchanges");
  };
  const getLibraryBooks = (id) => {
    return knex.select("book_id").from("libraries").where("owner_id", id);
  };
  const getNeeds = () => {
    return knex.select("*").from("needs");
  };
  const getUserByEmail = (email) => {
    return knex.select("*").from("users").where("email", email);
  };
  const addUserToDatabase = (user) => {
    return knex("users").insert(user);
  };
  const getBooksForUser = (id) => {
    let book_ids = knex
      .select("book_id")
      .from("libraries")
      .where("owner_id", id);
    return knex.select("*").from("books").whereIn("id", book_ids);
  };
  const getNeedsForUser = (id) => {
    return knex
      .select("*")
      .from("books")
      .innerJoin("needs", "needs.book_id", "books.id")
      .innerJoin("users", "needs.user_id", "users.id")
      .where("users.id", id);
  };

  const getBookByName = (name) => {
    return knex.select("*").from("books").where("name", name);
  };

  const getGenreByName = (name) => {
    return knex.select("*").from("genres").where("name", name);
  };

  const addBookToDatabase = (book) => {
    return knex.insert(book).returning("id").into("books");
  };

  const addGenreAndBookToDatabase = (genre, book) => {
    return knex
      .insert(genre)
      .returning("id")
      .into("genres")
      .then((genre_id) => {
        return knex
          .insert({
            name: book.name,
            author: book.author,
            image: book.image,
            genre_id: genre_id[0],
          })
          .returning("id")
          .into("books");
      });
  };

  const addToLibrary = (data) => {
    return knex("libraries").insert(data);
  };

  const addToNeeds = (data) => {
    return knex("needs").insert(data);
  };

  const bookSearch = (name) => {
    return knex
      .from("books")
      .select(
        "books.id AS book_id",
        "books.name",
        "books.author",
        "books.image",
        "users.id AS user_id",
        "users.username",
        "users.location"
      )
      .innerJoin("libraries", "book_id", "books.id")
      .innerJoin("users", "libraries.owner_id", "users.id")
      .whereRaw("LOWER(name) LIKE ?", [`%${name}%`]);
  };

  return {
    getUsers,
    getGenres,
    getBooks,
    getExchanges,
    getLibraryBooks,
    getNeeds,
    getUserByEmail,
    addUserToDatabase,
    getBooksForUser,
    getNeedsForUser,
    getBookByName,
    getGenreByName,
    addBookToDatabase,
    addGenreAndBookToDatabase,
    addToLibrary,
    addToNeeds,
    bookSearch,
  };
};
