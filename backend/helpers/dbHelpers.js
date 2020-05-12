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
  const getLibraries = () => {
    return knex.select("*").from("libraries");
  };
  const getNeeds = () => {
    return knex.select("*").from("needs");
  };
  const getUserByEmail = (email) => {
    return knex.select("*").from("users").where("email", email);
  };
  return {
    getUsers,
    getGenres,
    getBooks,
    getExchanges,
    getLibraries,
    getNeeds,
    getUserByEmail,
  };
};
