exports.seed = function (knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("genres").del(),
    knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1"),
    knex("genres").then(function () {
      // Inserts seed entries
      return knex("genres").insert([
        {
          name: "Sci-Fi",
        },
        {
          name: "Thriller",
        },
        {
          name: "Comedy",
        },
      ]);
    }),
  ]);
};
