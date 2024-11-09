// Prompt the user to enter the starting and ending numbers
let start = parseInt(prompt("Enter the starting number:"));
let end = parseInt(prompt("Enter the ending number:"));

// Check if start is less than or equal to end, then print the range
if (start <= end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
} else {
    console.log("The starting number should be less than or equal to the ending number.");
}
