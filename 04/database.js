// import Database from 'better-sqlite3';

// **Do I need parameters or are they not required?
export function tableCheck() {
  
// make sure to require database
const Database = require('Database');
  
CREATE TABLE IF NOT EXISTS customers
(
   lastname varchar,
   firstname varchar,
   email varchar
);
  
// module.exports = tableCheck
}
