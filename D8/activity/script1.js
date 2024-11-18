// Calculate the square root of a given number
const number = 20;
const squareRoot = Math.sqrt(number);
console.log(`The square root of ${number} is ${squareRoot}`);

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`Random number between 1 and 10: ${randomNumber}`);

// Convert a string representation of a number to an actual number
const strNumber = "42";
const actualNumber = Number(strNumber);
console.log(`The string "${strNumber}" converted to a number is ${actualNumber}`);

// Check if a value is not a number
const value = "hello";
const isNotANumber = isNaN(value);
console.log(`Is "${value}" not a number? ${isNotANumber}`);

// Convert a number to a string
const num = 123;
const numAsString = num.toString();
console.log(`The number ${num} converted to a string is "${numAsString}"`);
