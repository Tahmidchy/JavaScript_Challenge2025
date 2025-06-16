/*
TODO: Problem-24: Print the numbers from 1 to 50 that are divisible by both 3 and 4 and find the sum of the numbers.
*/

// Solution:
let sum = 0; // Initialize a variable to hold the sum of the numbers
for (let i = 1; i <= 50; i++){// Loop through numbers from 1 to 50
    if (i % 3 === 0 && i % 4 === 0) { // Check if the number is divisible by both 3 and 4
        console.log(`The number ${i} is divisible by both 3 and 4`); // Print the number
        sum += i; // Add the number to the sum
    }
}
console.log(`The sum of the numbers divisible by both 3 and 4 is: ${sum}`); // Print the sum
// Output:  
// The number 12 is divisible by both 3 and 4
// The number 24 is divisible by both 3 and 4   