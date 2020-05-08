exports.up = function (knex) {
  return knex.schema.createTable("books", (table) => {
    table.increments("id").primary().unsigned();
    table.string("name");
    table.string("author");
    table.date("published_on");
    table.integer("isbn");
    table.string("image");
    table
      .integer("genre_id")
      .references("id")
      .inTable("genres")
      .notNull()
      .onDelete("cascade");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("books");
};
