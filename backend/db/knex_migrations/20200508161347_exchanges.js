exports.up = function (knex) {
  return knex.schema.createTable("exchanges", (table) => {
    table.increments("id").primary().unsigned();
    table
      .integer("book_id")
      .references("id")
      .inTable("books")
      .notNull()
      .onDelete("cascade");
    table
      .integer("owner_id")
      .references("id")
      .inTable("users")
      .notNull()
      .onDelete("cascade");
    table
      .integer("receiver_id")
      .references("id")
      .inTable("users")
      .notNull()
      .onDelete("cascade");
    table.date("date");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("exchanges");
};
