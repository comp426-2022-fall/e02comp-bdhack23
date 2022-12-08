const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./04/info.db");

function tableCheck() {
  
// make sure to require database
const sql = `
    CREATE TABLE IF NOT EXISTS customers (
    lastname varchar,
    firstname varchar,
    email varchar)`
return this.dao.run(sql)
}
