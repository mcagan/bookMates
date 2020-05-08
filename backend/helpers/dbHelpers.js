module.exports = (knex) => {
  const getUsers = () => {
    console.log("in the function");
    return knex.select("*").from("users");
  };

  return {
    getUsers,
  };
};
