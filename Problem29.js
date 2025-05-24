/*
TODO: Problem-29: Print the numbers from 91 to 120, but if it finds a number that is divisible by 10, it will turn off printing.
*/

// Solution:
for (let i = 91; i <= 120; i++) { // Loop through numbers from 91 to 120
    if (i % 10 === 0) { // Check if the number is divisible by 10
        break; // Stop the loop if the number is divisible by 10
    }
    console.log(i); // Print the number
}
// Output: 91-99, 100-120
// Explanation:
// The code prints numbers from 91 to 120, stopping when it encounters a number that is divisible by 10. The break statement is used to exit the loop when the condition is met (i.e., when i is divisible by 10).