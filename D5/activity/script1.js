// Prompt the user to enter a score
let score = prompt("Enter your score:");
score = Number(score); // Convert the input to a number

// Determine the grade based on the score
let grade;

if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

// Print the grade to the console
console.log(`Your grade is: ${grade}`);
