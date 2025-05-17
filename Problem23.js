/*
TODO: Problem -23: You have written the names of some cities - "Dhaka", "Chittagong", "Sylhet". Now you thought that you would add the name of another city, "Rajshahi", but you accidentally added it with lowercase letters. Now write a program to check whether "Rajshahi" is in uppercase letters or not.
*/

// Solution:

let cities = ["Dhaka", "Chittagong", "Sylhet"]; // Array of cities
cities.push("rajshahi"); // Add "rajshahi" to the array
let checkCity = cities.includes("Rajshahi"); // Check if "Rajshahi" is in the array
console.log(`Is "Rajshahi" in uppercase letters? ${checkCity}`); // Log the result to the console