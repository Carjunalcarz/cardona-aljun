// Step 1: Declare a function named isEven that takes a number as a parameter and returns true if the number is even and false otherwise.
const isEven = (number) => {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

// Step 2: Use a for loop to iterate from 0 to 10. Call the isEven function for each iteration and log the result to the console.
for (let num = 0; num < 10; num++) {
  console.log(isEven(num));
}
// Step 3: Declare a function named multiply that takes two numbers as parameters and returns their product.
const multiply = (a, b) => {
  return a * b;
};
// Step 4: Use a while loop to repeatedly prompt the user to enter two numbers and calculate their product using the multiply function. Log the result to the console. Terminate the loop when the user enters a negative number as any of the inputs.
// while (true) {

//     let num1 = prompt("Enter the first number (must be a positive number):");

//     if (isNaN(num1) || num1 < 0) {
//       console.log("Invalid or negative number entered for the first number. Terminating.");
//       break;
//     }

//     let num2 = prompt("Enter the second number (must be a positive number):");

//     if (isNaN(num2) || num2 < 0) {
//       console.log("Invalid or negative number entered for the second number. Terminating.");
//       break;
//     }

//     // Calculate the product using the multiply function
//     let result = multiply(num1, num2);
//     console.log(`The product of ${num1} and ${num2} is ${result}.`);
//   }

// Step 5: Declare a function named reverseString that takes a string as a parameter and returns the reversed version of the string.
const reverseString = (str) => {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
};

// Step 6: Call the reverseString function with the string 'hello' and log the result to the console.
console.log(reverseString("hello"));
// Step 7: Declare a function named countVowels that takes a string as a parameter and returns the number of vowels in the string.
const countVowels = (str) => {
  const vowels = /[aeiouAEIOU]/g;
  const matches = str.match(vowels);
  return matches ? matches.length : 0;
};
// Step 8: Call the countVowels function with the string 'JavaScript' and log the result to the console.
console.log(countVowels("JavaScript"));
// Step 9: Declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array.
const findMax = (numbers) => {
  return Math.max(...numbers);
};
// Step 10: Call the findMax function with the array [4, 9, 2, 7, 5] and log the result to the console.
console.log(findMax([4, 9, 2, 7, 5]));
// Step 11: Declare a function named calculateFactorial that takes a number as a parameter and returns its factorial value.

const calculateFactorial = (num) => {
  let factorial = 1;
  if (num < 0) return "Factorial is not defined for negative numbers";
  if (num == 0 || num == 1) {
    return 1; //factorial of 0 or 1 is  1
  }

  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};
// Step 12: Call the calculateFactorial function with the number 5 and log the result to the console.
console.log(calculateFactorial(100));
// Step 13: Declare a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise.
const isPalindrome = (str) => {
  // Convert the string to lowercase and remove non-alphanumeric characters for accurate comparison
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  // Check if the cleaned string is equal to its reverse
  return cleanedStr === cleanedStr.split("").reverse().join("");
};
// Step 14: Call the isPalindrome function with the string 'level' and log the result to the console.
console.log(isPalindrome("level"));
// Step 15: Declare a function named sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

const sumArray = (num) => {
  let arrNum = [...num];
  let total = 0;
  for (let i = 0; i < arrNum.length; i++) {
    total += arrNum[i];
  }
  return total;
};
// Step 16: Call the sumArray function with the array [1, 2, 3, 4, 5] and log the result to the console.
console.log(sumArray([1, 2, 3, 4, 5]));
// Step 17: Declare a function named capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
// Step 18: Call the capitalizeFirstLetter function with the string 'javascript' and log the result to the console.
console.log(capitalizeFirstLetter("javascript"));
// Step 19: Declare a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array with only the even numbers.
const filterEvenNumbers = (num) => {
  let numbers = [...num];
  let newArray = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
};
// Step 20: Call the filterEvenNumbers function with the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and log the result to the console.
console.log(filterEvenNumbers([1,2,3,4,5,6,7,8,9,10]));