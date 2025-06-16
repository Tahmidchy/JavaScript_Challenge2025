/*
TODO: Problem-25: Suppose you want to print the numbers from 1 to 30. But you think you will print up to 15 and then stop. It will stop. Write the program.
*/

// Solution:
for (let i = 1; i <= 30; i++){ // Loop through numbers from 1 to 30
    if (i === 15) { // Check if the number is equal to 15
        break; // Stop the loop when the number is 15
    }
    console.log(i); // Print the number
}
// Output: 1-14
// Explanation: 
// The code prints numbers from 1 to 14 and stops when it reaches 15 due to the break statement.
// The break statement is used to exit the loop when a certain condition is met, in this case, when the number is equal to 15.