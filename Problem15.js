/*
TODO: Problem - 15: Add the numbers from 20 to 40 and log only the final sum to the console using a While loop.
*/

// Solution:

let num = 20; // Initialize a counter variable starting from 20
let sum = 0; // Initialize a variable to hold the sum of the numbers
while(num <= 40){
    sum += num; // Add the current value of the counter variable to the sum
    num++; // Increment the counter variable by 1
    // The loop will continue until the counter variable is less than or equal to 40
    // This will calculate the sum of the numbers from 20 to 40
}
console.log(`The sum of numbers from 20 to 40 is: ${sum}`); // Log the final sum to the console
// The output will be the sum of all numbers from 20 to 40