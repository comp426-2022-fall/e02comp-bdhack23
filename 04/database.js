const sqlite3 = require('sqlite3').verbose();
const Database = require('Database');

function tableCheck() {
  
// make sure to require database
  
CREATE table IF NOT EXISTS customers
(
   lastname varchar,
   firstname varchar,
   email varchar
);
  
// module.exports = tableCheck
}
