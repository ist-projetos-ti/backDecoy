const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "decoy",
    password: "senai@123",
    database: "decoy",
  },
});

module.exports = knex;
