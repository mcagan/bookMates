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
    return knex("books").insert(book);
  };

  const addGenreToDatabase = (genre) => {
    return knex("genres").insert(genre);
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
    addGenreToDatabase,
  };
};
