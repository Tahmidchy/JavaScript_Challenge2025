/*
TODO: Problem-28: Print from 1 to 25, but exclude numbers divisible by 3.
*/

// Solution:
for (let i = 1; i <= 25; i++){
    if (i % 3 === 0) { // Check if the number is divisible by 3
        continue; // Skip the number if it is divisible by 3
    }
    console.log(i); // Print the number
}