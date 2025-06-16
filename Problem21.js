/*
TODO: Problem-21: Now find the sum of all the numbers from 1 to 40 that are divisible by 13.
*/

// Solution:

let sum = 0; // Initialize the sum variable to 0
for (let i = 1; i <= 40; i++){
    if (i % 13 === 0) { // Check if the number is divisible by 13
        sum += i; // Add the current number to the sum
    }
}
console.log(`The sum of numbers from 1 to 40 that are divisible by 13 is: ${sum}`);
// Output:  
// The sum of numbers from 1 to 40 that are divisible by 13 is: 26
// Explanation:
// The sum of numbers from 1 to 40 that are divisible by 13 is calculated by adding all the numbers in that range that meet the condition.
// In this case, the numbers are 13 and 26, which sum to 39.
// The code checks each number in the range and adds it to the sum if it is divisible by 13.