/*
TODO: Example-7: Now we are testing here js core concept undefined vs null. here we are testing simple understanding of the undefined.
*/

// Example-7: Understanding undefined vs null

let first;
console.log("Value of first:", first); // Output: Value of first: undefined
// first is undefined because it has been declared but not assigned a value yet

let second = null;
console.log("Value of second:", second); // Output: Value of second: null
// second is null because it has been explicitly assigned the value null, indicating the absence of any object value 
console.log("Type of first:", typeof first); // Output: Type of first: undefined
console.log("Type of second:", typeof second); // Output: Type of second: object
// Note: In JavaScript, the type of null is considered an object due to a historical bug in the language design 