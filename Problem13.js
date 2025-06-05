/*
TODO: Problem-13: You will list the roll numbers of students from 1 to 50 in a school and then use a While loop to find the sum of those numbers.
*/

// Solution:

let rollNumber = 1; // Initialize a counter variable starting from 1
let sum = 0; // Initialize a variable to hold the sum of the roll numbers
while(rollNumber <= 50){
    sum += rollNumber; // Add the current value of the counter variable to the sum
    rollNumber++; // Increment the counter variable by 1
    // The loop will continue until the counter variable is less than or equal to 50
    // This will calculate the sum of the roll numbers from 1 to 50
}
console.log(`The sum of roll numbers from 1 to 50 is: ${sum}`); // Log the final sum to the console