/*
TODO: Problem-4: The three numbers need to be `destructuring' from an array, separated by the second number, and placed in a variable called seconds.
*/

// Solution: 

const numbers = [10, 20, 30];
const [, seconds] = numbers;
console.log(seconds); // Output: 20
