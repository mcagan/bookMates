// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    // searchPath: "schema_bookmate",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: "./db/knex_migrations",
    },
    seeds: {
      directory: "./db/knex_seeds",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: process.env.DB_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./db/knex_migrations",
    },
    seeds: {
      directory: "./db/knex_seeds",
    },
  },
};
