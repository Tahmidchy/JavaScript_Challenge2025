/*
TODO: Problem-26: You want to print the numbers from 1 to 40, but you want to print them in such a way that the numbers divisible by 7 are skipped. For example, (7,14,21,) etc. will be skipped. Write a program where the numbers will be skipped.
*/

// Solution:

for (let i = 1; i <= 40; i++){
    if (i % 7 === 0) { // Check if the number is divisible by 7
        continue; // Skip the number if it is divisible by 7
    }
    console.log(i); // Print the number
}