exports.up = function (knex) {
  return knex.schema.createTable("libraries", (table) => {
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
    table.boolean("available_for_trade");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("libraries");
};
