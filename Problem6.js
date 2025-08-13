/*
TODO: Problem-6: Separate the first and second values by destructuring the function return.function multiply(a,b) { return [a*3,b*3];} .
*/

// Solution:

function multiply(a, b) {
    return [a * 3, b * 3];
}
const [firstValue, secondValue] = multiply(2, 4);
console.log(firstValue); // Output: 6
console.log(secondValue); // Output: 12