// Require fs module
const fs = require('fs');

const args = require('minimist')(process.argv.slice(2));

// Require minimist module.

// Define a const `port`as 5555
const port = 5555;

// **Do I need parameters or are they not required?
// create the constants for both numbers
const input1 = parseInt(prompt('First number '));
const input2 = parseInt(prompt('Second number '));

//add two numbers
const sum = input1 + input2;

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(data)
  })
  server.listen(input1,input2,sum()) =>{
    console.log(`{"input1": ${input1},"input2": ${input2},"sum:" ${sum}}`)
  });
});
