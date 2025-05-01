/*
TODO: Problem-22: A variable A has the value hello and variable B has the value "Hello". Now write a program to check if variable A == variable B and variable A === variable B.
*/

// Solution: 

let variableA = hello;
let variableB = "Hello";
console.log(variableA == variableB); // Output: false
console.log(variableA === variableB); // Output: false

// Explanation: In JavaScript, the '==' operator checks for equality in value, while the '===' operator checks for equality in both value and type. Since variableA is a variable and variableB is a string, they are not equal in both value and type, so both '==' and '===' operators return false. 