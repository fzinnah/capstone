// initialize postgres db
const Sequelize = require('sequelize');
// const dotenv = require('dotenv').config();
// const config = require('config');
const database_url =
  process.env.DATABASE_URL || `postgres://localhost:5432/howlr`;

console.log('Using database url ', database_url);

const db = new Sequelize(
  // loads the correct database url based on NODE_ENV (default / dev / test)
  database_url || `postgres://localhost:5432/howlr`,
  {
    logging: false,
  }
);

module.exports = db;
