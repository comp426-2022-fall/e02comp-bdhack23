var math = require('mathjs');
const prompt = require("prompt-sync")({sigint:true});

function add() {
// create the constants for both numbers
const first = parseInt(prompt('First number '));
const second = parseInt(prompt('Second number '));

//add two numbers
const sum = math.add(first, second);

// console.log(`math.add(${A},${B})`);
// console.log(`${sum}`);
console.log(sum);

// return the sum
return sum;

// module.exports = add
}

// export { add };
