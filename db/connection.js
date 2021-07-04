const mysql = require('mysql2');
const util = require ('util');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'Beedfurder1!',
  database: 'company'
});

db.connect();
db.query = util.promisify(db.query);

module.exports = db;
