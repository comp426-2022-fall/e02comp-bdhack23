// **Do I need parameters or are they not required?
const math = require('mathjs')

function add() {
// create the constants for both numbers
const first = parseInt(prompt('First number '));
const second = parseInt(prompt('Second number '));

//add two numbers
const sum = math.add(first, second);

// console.log(`math.add(${A},${B})`);
console.log(`${sum}`);

// return the sum
return sum;
  
// module.exports = add
}
