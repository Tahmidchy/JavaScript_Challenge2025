/*
TODO: Problem-17: There are three arrays: const frontEnd=["JavaScript"],const backEnd=["Node.js"],const database=["MongoDB"], These three arrays need to be combined using the spread operator.
*/

// Solution: 

const frontEnd = ["JavaScript"];
const backEnd = ["Node.js"];
const database = ["MongoDB"];
const fullStack = [...frontEnd, ...backEnd, ...database]; // Using Spread Operator to combine arrays
console.log(fullStack); // Output: ["JavaScript", "Node.js", "MongoDB"]