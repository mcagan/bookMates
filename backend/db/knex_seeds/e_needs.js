exports.seed = function (knex) {
  return Promise.all([
    knex("needs").then(function () {
      // Inserts seed entries
      return knex("needs").insert([
        {
          book_id: 1,
          user_id: 2,
        },
      ]);
    }),
  ]);
};
