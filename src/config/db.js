// config/db.js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'bdmilpqdooc328dthjhu-mysql.services.clever-cloud.com',
  user: 'uayy1flbq2n75fcx',
  password: 'XKajj5Ma3hZaHOCmBUyb',
  database: 'bdmilpqdooc328dthjhu',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});

module.exports = db;
