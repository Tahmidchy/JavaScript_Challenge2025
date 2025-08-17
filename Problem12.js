/*
TODO: Problem-12: There is an array of numbers. [10,20,3,30,300,3000] Put the rest of this except the first two elements into another array.
*/

// Solution: 

const numbers = [10, 20, 3, 30, 300, 3000];
const [first, second, ...rest] = numbers;
console.log(first); // Output: 10
console.log(second); // Output: 20
console.log(rest); // Output: [3, 30, 300, 3000