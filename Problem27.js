/*
TODO: Problem-27: You want to print the numbers from 1 to 15 but excluding 9. Write a program that skips 9 and prints all the rest.
*/

// Solution:
for (let i = 1; i <= 15; i++) { // Loop through numbers from 1 to 15
    if (i === 9) { // Check if the number is equal to 9
        continue; // Skip the number if it is 9
    }
    console.log(i); // Print the number
}
// Output: 1-8, 10-15
// Explanation:
// The code prints numbers from 1 to 15, skipping 9. The continue statement is used to skip the current iteration of the loop when the condition is met (i.e., when i is equal to 9).
// The continue statement allows the loop to skip the rest of the code inside the loop for the current iteration and move to the next iteration.