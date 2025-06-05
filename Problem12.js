/*
TODO: Problem-12: Find the sum of the numbers from 5 to 15 using a while loop.
*/

// Solution:

let num = 5; // Initialize a counter variable starting from 5
let sum = 0; // Initialize a variable to hold the sum of the numbers
while(num <= 15){
    sum += num; // Add the current value of the counter variable to the sum
    num++; // Increment the counter variable by 1
    // The loop will continue until the counter variable is less than or equal to 15
    // This will calculate the sum of the numbers from 5 to 15
}
console.log(sum); // Log the final sum to the console
