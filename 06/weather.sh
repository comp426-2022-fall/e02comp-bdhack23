#!/bin/bash

import fetch from 'node-fetch';

# PLACE YOUR CURL COMMAND ON THE LINE BELOW THIS ONE

// let url = `https://api.weather.gov/points/36.2168,-81.6746`;
      
// let response=await fetch(url);

// const data=await response.json();

// console.log( url );

// console.log( data );

fetch("https://api.weather.gov/points/36.2168,-81.6746", {
  "method": "GET",
  "headers": {
  }
  })
.then(response => {
  console.log(response);
})
