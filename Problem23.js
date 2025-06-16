/*
TODO: Problem-23: Print all the numbers from 0 to 100 that are divisible by 9 and 6.
*/

// Solution:

for (let i = 0; i <= 100; i++){
    if (i % 9 === 0 && i % 6 === 0) { // Check if the number is divisible by both 9 and 6
        console.log(`The number ${i} is divisible by both 9 and 6`);
    }
    // Output:
    // The number 0 is divisible by both 9 and 6
    // The number 18 is divisible by both 9 and 6
    // The number 36 is divisible by both 9 and 6
    // The number 54 is divisible by both 9 and 6
    // The number 72 is divisible by both 9 and 6
    // The number 90 is divisible by both 9 and 6
    // The number 108 is divisible by both 9 and 6
    // Explanation:
    // The code checks each number in the range from 0 to 100 and prints it if it meets the condition of being divisible by both 9 and 6.
}