exports.seed = function (knex) {
  // Deletes ALL existing entries
  return Promise.all([
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
        {
          name: "Fiction",
        },
        {
          name: "Biography",
        },
      ]);
    }),
  ]);
};
