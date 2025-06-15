/*
TODO: Problem-17: You will list the roll numbers of students from 31 to 58 in the school and then use a for loop to find the sum of those numbers.
*/

// Solution:

let sum = 0;
for(let i = 31; i <= 58; i++){
    sum += i; // Add the current roll number to the sum
}

console.log(`The sum of roll numbers from 31 to 58 is: ${sum}`);
// Output:
// The sum of roll numbers from 31 to 58 is: 2654
// Explanation:
// The sum of roll numbers from 31 to 58 is calculated by adding all the numbers in that range.
// The formula for the sum of an arithmetic series is: n/2 * (first term + last term)