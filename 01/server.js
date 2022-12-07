// Require http module
import http from 'http';

// Require fs module
import fs from 'fs';

import minimist from 'minimist';

var args = minimist(process.argv.slice(2));

// Require minimist module.

// Define a const `port`as 5555
const port = 5555;

args["message"];

const message = args.message || "It works!";


const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(data)
  })
  server.listen(message, () => {
    console.log(`{"message": ${message}}`)
  });
