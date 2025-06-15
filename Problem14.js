/*
TODO: Problem-14: Use a while loop to find the sum of the numbers from 21 to 50 and display the sum each time.
*/

// Solution:

let num = 21; // Initialize a counter variable starting from 21
let sum = 0; // Initialize a variable to hold the sum of the numbers
while(num <= 50){
    sum += num; // Add the current value of the counter variable to the sum
    console.log(`The sum of numbers from 21 to ${num} is: ${sum}`); // Log the current sum to the console
    num++; // Increment the counter variable by 1
    // The loop will continue until the counter variable is less than or equal to 50
    // This will calculate and display the sum of the numbers from 21 to 50 incrementally
    // Each time the loop runs, it will show the sum up to the current number
}