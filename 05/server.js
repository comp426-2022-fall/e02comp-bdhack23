const sqlite3 = require('sqlite3').verbose();
const Database = require('Database');

// Require http module
const http = require('http');

// Require fs module
const fs = require('fs');

const args = require('minimist')(process.argv.slice(2));

args["port"];

const port = args.port || process.env.PORT || 5555;

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(data)
  });

CREATE TABLE IF NOT EXISTS customers
(
   lastname varchar,
   firstname varchar,
   email varchar
);
