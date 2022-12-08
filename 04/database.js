// **Do I need parameters or are they not required?
function tableCheck() {
  
// make sure to require database
const Database = require('Database');
const sqlite3 = require('sqlite3').verbose();
  
CREATE TABLE IF NOT EXISTS customers
(
   lastname varchar,
   firstname varchar,
   email varchar
);
  
// module.exports = tableCheck
}
