// Step 1: Create an array called 'students' with three objects representing student information.
// Each student object should have properties: 'name', 'age', and 'grade'.
students = [
  {
    name: "Aljun",
    age: 29,
    grade: 89,
  },
  {
    name: "Juan",
    age: 21,
    grade: 69,
  },
  {
    name: "Doe Jhon",
    age: 40,
    grade: 96,
  },
];

// Step 2: Access the name of the second student in the 'students' array and log it to the console.
console.log("Step 2 ->",students[2]);
// Step 3: Add a new student object to the 'students' array.
students.push({
  name: "Huskar",
  age: 25,
  grade: 88,
});

// The new student should have properties: 'name', 'age', and 'grade'.

console.log("Step 3 Result", students);

// Step 4: Loop through the 'students' array and log each student's name and grade to the console.
students.forEach((obj) => {
  console.log(`Step 4 Result -> Name : ${obj.name} Age : ${obj.age}`);
});
// Step 5: Create an object called 'book' with properties 'title', 'author', and 'year'.
book = {
    title: "Juan Tamad",
    author: "Huskar jr.",
    year: "2021",
    

    //Step 8 : Create the 'getSummary' Method
    getSummary : function(){
        summary = `${this.title} - ${this.author} - ${this.year}`
        return summary;
    }
  }


// Step 6: Access the title of the 'book' object and log it to the console.
console.log(book.title);
// Step 7: Update the 'year' property of the 'book' object to 1930.
book.title = "1930";
console.log("Result Step 7 ->",book.title)
// Step 8: Create a method called 'getSummary' for the 'book' object.
  
// The method should return a string summarizing the book's title, author, and year.

// Step 9: Call the 'getSummary' method of the 'book' object and log the result to the console.
console.log("Result step 8 ->",book.getSummary());
// Step 10: Create an array called 'library' and add the 'book' object to it.
const library = [];
library.push(book);
// Step 11: Log the 'library' array to the console to verify the book is stored in the array.
console.log("Step 11 ->", library)
// Step 12: Create an object called 'car' with properties 'brand', 'model', and 'year'.
car = {
    brand : "BMW",
    model : "2024-v2",
    year : "2024",

    startEngine : function(){
        
       starting = "Car Starting"
       console.log("Step 16",starting);
       return starting;

    }
}
// Step 13: Access the 'model' property of the 'car' object and log it to the console.
console.log("Step 13-> Model :",car.model)
// Step 14: Update the 'year' property of the 'car' object to 2023.
car.year = "2023";
// Step 15: Create a method called 'startEngine' for the 'car' object.

// The method should log a message to the console indicating that the car's engine is starting.
console.log("Step 15 ->", car.startEngine());
// Step 16: Call the 'startEngine' method of the 'car' object.
car.startEngine();
// Step 17: Create an array called 'garage' and add the 'car' object to it.
garage = [car];
// Step 18: Log the 'garage' array to the console to verify the car is stored in the array.
console.log(garage);
// Step 19: Create an object called 'person' with properties 'name', 'age', and 'city'.
person = 
{
    name : "Alcarz",
    age : 29,
    city : "Cabadbaran City"

}
// Step 20: Access the 'age' property of the 'person' object and log it to the console.
console.log("Step 20 -> ",person.age)
// Feel free to add more steps or customize the activity according to your needs.
