#!/bin/bash
const fetch =require('node-fetch');

// Require http module
const http = require('http');

// Require fs module
const fs = require('fs');

const args = require('minimist')(process.argv.slice(2));

args["port"];

const port = args.port || process.env.PORT || 5555;

const time = Math.floor(Date.now() / 1000)


const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(data)
  })
  server.listen(time, () => {
    console.log(`{"unixtime": ${time}}`)
  });
});
