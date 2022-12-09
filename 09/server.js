// Require modules
var fs = require('fs')
var express = require('express')
var path = require('path')
var morgan = require('morgan')
var app = require('express')


const args = require('minimist')(process.argv.slice(2));
args["port"];

// Define `port`constant
const port = args.port || process.env.PORT || 5555;

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))
