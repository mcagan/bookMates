exports.seed = function (knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("users").then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          first_name: "Dom",
          last_name: "Tremblay",
          username: "Dom",
          email: "domT@lhl.com",
          password: "test",
          location: "Montreal",
          occupation: "Instructor",
          about_me:
            "Got my first round of financing with an all pink business plan.",
          avatar: "Avatar2",
        },
        {
          first_name: "Francis",
          last_name: "Bourgouin",
          username: "Francis",
          email: "francisB@lhl.com",
          password: "test",
          location: "Montreal",
          occupation: "Instructor",
          about_me: "I like Tshirts, and I got a puny personality",
          avatar: "Avatar3",
        },
        {
          first_name: "Emile",
          last_name: "Cantin",
          username: "Emile",
          email: "emileC@lhl.com",
          password: "test",
          location: "Greater Montreal",
          occupation: "LHL Instructor",
          about_me: "Developer, dad of 4 girls, and a sailor!",
          avatar: "Avatar4",
        },
        {
          first_name: "Horatiu",
          last_name: "Halmaghi",
          username: "Horatiu",
          email: "horatiuH@lhl.com",
          password: "test",
          location: "Montreal",
          occupation: "Mentor",
          about_me:
            "A childhood neighbour of my mother was sent on a quest by a witch.",
          avatar: "Avatar5",
        },
        {
          first_name: "Max",
          last_name: "Kovalenkov",
          username: "Max",
          email: "maxK@lhl.com",
          password: "test",
          location: "Montreal",
          occupation: "Mentor",
          about_me:
            "Lived in Ukraine (born and adolescence), Ottawa (school + university years), Brazil, and Montreal. I speak 5 human languages.",
          avatar: "Avatar1",
        },
      ]);
    }),
  ]);
};
