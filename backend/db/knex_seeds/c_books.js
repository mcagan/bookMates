exports.seed = function (knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("books").del(),
    knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1"),
    knex("books").then(function () {
      // Inserts seed entries
      return knex("books").insert([
        {
          name: "The Disposessed",
          author: "Ursule Le Guin",
          published_on: "1994-10-20",
          isbn: "0061054887",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51oB3LJckjL._SX300_BO1,204,203,200_.jpg",
          genre_id: 1,
        },
        {
          name: "Parable of the Sower",
          author: "Octavia E. Butler",
          published_on: "2000-01-01",
          isbn: "0446675504",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/71jg6gRAKkL.jpg",
          genre_id: 1,
        },
      ]);
    }),
  ]);
};
