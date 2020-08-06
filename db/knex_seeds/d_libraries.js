exports.seed = function (knex) {
  return Promise.all([
    knex("libraries").then(function () {
      // Inserts seed entries
      return knex("libraries").insert([
        {
          book_id: 1,
          owner_id: 2,
        },
        { book_id: 1, owner_id: 3 },
        { book_id: 2, owner_id: 2 },
        { book_id: 2, owner_id: 5 },
        { book_id: 3, owner_id: 1 },
        { book_id: 3, owner_id: 3 },
        { book_id: 3, owner_id: 4 },
        { book_id: 4, owner_id: 1 },
        { book_id: 4, owner_id: 5 },
        { book_id: 4, owner_id: 2 },
        { book_id: 5, owner_id: 1 },
        { book_id: 5, owner_id: 3 },
        { book_id: 5, owner_id: 4 },
        { book_id: 6, owner_id: 1 },
        { book_id: 6, owner_id: 2 },
        { book_id: 7, owner_id: 3 },
        { book_id: 7, owner_id: 4 },
        { book_id: 8, owner_id: 5 },
        { book_id: 8, owner_id: 3 },
        { book_id: 9, owner_id: 1 },
        { book_id: 9, owner_id: 3 },
        { book_id: 9, owner_id: 4 },
        { book_id: 9, owner_id: 2 },
        { book_id: 10, owner_id: 3 },
        { book_id: 10, owner_id: 5 },
      ]);
    }),
  ]);
};
