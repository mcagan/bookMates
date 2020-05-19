exports.up = function (knex) {
  return knex.schema.createTable("needs", (table) => {
    table.increments("id").primary().unsigned();
    table
      .integer("book_id")
      .references("id")
      .inTable("books")
      .notNull()
      .onDelete("cascade");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .notNull()
      .onDelete("cascade");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("needs");
};
