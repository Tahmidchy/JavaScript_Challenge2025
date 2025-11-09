/*
TODO: Example-8: Now we are testing on Logical Errors and Range Errors in JavaScript. Below are two examples demonstrating how to handle these errors effectively.
1. Logical Error Example:
   In this example, we will demonstrate a common logical error and how to fix it.       
*/

// Logical Error Example

const num1 = 10;
const num2 = 0;
const sum = num1 - num2; // Logical Error: Should be addition instead of subtraction
console.log("The sum is: " + sum); // Incorrect output

// Fixed Logical Error
const correctSum = num1 + num2; // Corrected to addition
console.log("The correct sum is: " + correctSum); // Correct output