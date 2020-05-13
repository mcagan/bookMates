exports.seed = function (knex) {
  return Promise.all([
    knex("libraries").then(function () {
      // Inserts seed entries
      return knex("libraries").insert([
        {
          book_id: 1,
          owner_id: 1,
        },
        { book_id: 2, owner_id: 1 },
      ]);
    }),
  ]);
};
