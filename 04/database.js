const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database(".info.db");

function prepare() {
  
// make sure to require database
const sql = `
    CREATE TABLE IF NOT EXISTS customers (
    lastname varchar,
    firstname varchar,
    email varchar)`
return this.dao.run(sql)
}
