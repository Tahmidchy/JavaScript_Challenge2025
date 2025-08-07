/*
TODO: Rest operator with a Function
*/
// Solution:

function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}
// Usage:
console.log(multiply(5, 1, 2, 3, 4)); //
// Output: [ 5, 10, 15, 20 ]
// The function takes a multiplier and an arbitrary number of numbers, returning an array of the multiplied values.
// The first two elements are destructured, and the rest are collected into the 'rest'
// array.
// The rest operator allows us to handle an indefinite number of arguments in a function, making it flexible and adaptable to various inputs.
// The rest operator is used to collect the remaining arguments into an array.