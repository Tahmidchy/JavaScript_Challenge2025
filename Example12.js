/* 
TODO: In here 3 dots are using two types one is for rest operator and another is for spread operator 3 dots are before the understanding we are check this code than explain the code.
*/

// Example -12: 

const max = Math.max(5,23,45,1,89,34);
console.log(max); // Output: 89

// Same code we are using this way it's send me not a number that's not working.

const numbers = [5, 23, 45, 1, 89, 34];
const arrayMax = Math.max(numbers);
console.log(arrayMax); // Output: NaN (Not a Number)
// Here we are using the same code but it's not working because Math.max() function is not designed to work with arrays. It expects individual numbers as arguments.
// Because Math.max() function is not designed to work with arrays. It expects individual numbers as arguments. 

// To use an array with Math.max(), we can use the spread operator (...) to expand the array into individual arguments.

const arrayMaxWithSpread = Math.max(...numbers);
console.log(arrayMaxWithSpread); // Output: 89