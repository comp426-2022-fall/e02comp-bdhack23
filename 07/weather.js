#!/bin/bash

var minimist = require('minimist');
var args = minimist(process.argv.slice(2));
var fetch = require('node-fetch');
var fs = require('fs');

// let latitude = args.latitude; 
let latitude = process.argv.indexOf('latitude');

// let longitude = args.longitude; 
let longitude = process.argv.indexOf('longitude');


// const url = "https://api.weather.gov/points/36.2168,-81.6746";
// const url = "https://api.open-meteo.com/v1/forecast?" + "latitude=" + latitude + "&longitude=" + longitude + "&daily=precipitation_sum&timezone=" + tz;
const url = "https://api.weather.gov/points/?" + latitude + "," + longitude;
      
const response = await fetch( url )

const data = await response.json()

console.log( url )

console.log( data )
