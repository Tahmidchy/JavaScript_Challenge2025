/*
TODO: Problem-15: Create a new array where the first element will be "variable" and the subsequent elements will be const technologies = ["Condition","Array","Loop"] , copying the array using the spread operator.
*/

// Solution: 

const technologies = ["Condition", "Array", "Loop"];
const newTechnologies = ["variable", ...technologies]; // Using Spread Operator to copy the array
console.log(newTechnologies); // Output: ["variable", "Condition", "Array", "Loop"]