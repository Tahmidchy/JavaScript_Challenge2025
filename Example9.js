/*
TODO: Some Info-REST operators are very important operators. REST operators allow many arguments or properties or elements to be put together, which makes complex tasks and many others easier. We will learn about the use of REST operators through 3 examples in a row.
*/

// TODO: Example 9 - REST operator with An Array

// Solution: 

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]