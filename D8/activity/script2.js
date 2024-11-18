// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
const square = (num) => num ** 2;
console.log(`The square of 5 is ${square(5)}`);

// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
const name = "Aljun";
const age = 30;
console.log(`Welcome, ${name}! You are ${age} years old.`);

// Task 3: Use destructuring to extract the first and last name from a person object and log them to the console.
const person = { firstName: "Jane", lastName: "Doe" };
const { firstName, lastName } = person;
console.log(`First Name: ${firstName}, Last Name: ${lastName}`);

// Task 4: Use the spread operator to merge two arrays into a single array.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(`Merged Array: ${mergedArray}`);

// Task 5: Use default parameters to create a function that calculates the area of a rectangle.
const calculateArea = (length = 1, width = 1) => length * width;
console.log(`Area of rectangle (5, 4): ${calculateArea(5, 4)}`);
console.log(`Area of rectangle with defaults: ${calculateArea()}`);

// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

const personInstance = new Person("Alice Gou", 25);
personInstance.introduce();
