/*
TODO: Problem-20: Show as output all the numbers from 40 to 80 that are divisible by 5 and 7.
*/

// Solution:

for (let i = 40; i <= 80; i++){
    if (i % 5 === 0 && i % 7 === 0) { // Check if the number is divisible by both 5 and 7
        console.log(`The number ${i} is divisible by both 5 and 7`);
    }
    // Output:
    // The number 70 is divisible by both 5 and 7
    // Explanation:
    // The only number between 40 and 80 that is divisible by both 5 and 7 is 70.
    // The code checks each number in the range and prints it if it meets the condition.
}