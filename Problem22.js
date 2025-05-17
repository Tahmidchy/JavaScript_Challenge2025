/*
TODO: Problem -22: Suppose you have created a list of friends - "Rimon" "Rifat", "Rajiv". Now you think you have forgotten Rifat's location. Now write a program that will find Rifat's location for you.
*/

// Solution:

let friends = ["Rimon", "Rifat", "Rajiv"]; // Array of friends
let index = friends.indexOf("Rifat"); // Find the index of "Rifat" in the array
console.log(`Rifat is at index: ${index}`); // Log the index of "Rifat" to the console
// Output: Rifat is at index: 1