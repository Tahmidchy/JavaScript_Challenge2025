/*
TODO: Problem-25: Write a program and create an array of your favorite sports. The array contains - "Football", "Cricket", "Volleyball". Now you want to check if badminton is in it?
*/

// Solution:

let favoriteSports = ["Football", "Cricket", "Volleyball"]; // Array of favorite sports
// Check if "Badminton" is in the array
let isBadmintonInArray = favoriteSports.includes("Badminton"); // Check if "Badminton" is in the array
console.log(isBadmintonInArray); // Log the result of the check
// If "Badminton" is in the array, log true; otherwise, log false