exports.seed = function (knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("users").then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          first_name: "SpongeBob",
          last_name: "Squarepants",
          username: "Spongy",
          email: "bob@sq.com",
          password: "test",
          location: "Montreal",
          occupation: "Student",
          about_me: "Lives in a pineapple under the sea",
          avatar: "../avataars/avataar_1.png",
        },
        {
          first_name: "Jane",
          last_name: "Doe",
          username: "JaneD",
          email: "jane@sq.com",
          password: "test",
          location: "Montreal",
          occupation: "Student",
          about_me: "Loves sci-fi",
          avatar: "../avataars/avataar_2.png",
        },
      ]);
    }),
  ]);
};
