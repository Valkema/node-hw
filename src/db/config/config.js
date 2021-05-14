require('dotenv/config');

module.exports = {
  development: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'stud-db',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    migrationStorage: 'json',
    seederStorage: 'json',
  },
  test: {},
  production: {},
};