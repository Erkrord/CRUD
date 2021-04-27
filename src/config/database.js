
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Connect to DB
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('К базе подключился, полет продолжается!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
