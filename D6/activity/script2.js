console.log("Activity 2");
// Step 1: Create a function expression named greet and assign it an anonymous function that logs a greeting message to the console.
const greet = () => {
  console.log("Hello , How are you today ?");
};
// Step 2: Call the greet function.
greet();
// Step 3: Create a function expression named add and assign it an anonymous function that takes two parameters and returns their sum.
const add = (num1, num2) => {
  total = num1 + num2;
  return total;
};
// Step 4: Call the add function with the arguments 5 and 3, and store the result in a variable named sum.
const sum = add(5, 3);

// Step 5: Log the value of the sum variable to the console.

console.log("Step 5 ->", sum);
// Step 6: Create a function expression named multiply and assign it an anonymous function that takes two parameters and returns their product.
const multiply = (num1, num2) => {
  total = num1 * num2;
  return total;
};
// Step 7: Call the multiply function with the arguments 4 and 2, and store the result in a variable named product.
const product = multiply(4, 2);

// Step 8: Log the value of the product variable to the console.
console.log("Step 8 ->", product);

// Step 9: Create a function expression named isEven and assign it an anonymous function that takes a number as a parameter and returns true if it's even, false otherwise.
esEven = (num) => {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

// Step 10: Call the isEven function with the argument 6 and store the result in a variable named even.
const even = esEven(6);
// Step 11: Log the value of the even variable to the console.
console.log("Step 11 -> ", even);
// Step 12: Create a function expression named square and assign it an anonymous function that takes a number as a parameter and returns its square.
const square = (number) => {
  return number * number;
};
// Step 13: Call the square function with the argument 3 and store the result in a variable named squaredValue.
const squaredValue = square(3);
// Step 14: Log the value of the squaredValue variable to the console.
console.log("Step 9 ->", squaredValue);
// Step 15: Create a function expression named fullName and assign it an anonymous function that takes two parameters (firstName and lastName) and returns the full name as a string.
const fullName = (firstname, lastname) => {
  return `${firstname}-${lastname}`;
};
// Step 16: Call the fullName function with the arguments 'John' and 'Doe', and store the result in a variable named name.
const name = fullName("John","Doe");
// Step 17: Log the value of the name variable to the console.
console.log(name);
// Step 18: Create a function expression named capitalize and assign it an anonymous function that takes a string as a parameter and returns the capitalized version of the string.
const capitalize = (str)=>{
   
    return str.toUpperCase(str);
 
}
// Step 19: Call the capitalize function with the argument 'javascript' and store the result in a variable named capitalizedString.
const capitalizedString = capitalize("javascript");
// Step 20: Log the value of the capitalizedString variable to the console.
console.log("Step 20 ->",capitalizedString)