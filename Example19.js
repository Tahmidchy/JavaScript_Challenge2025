/*
TODO: Example-19: Now we are testing on Type correction == vs === with NaN.
*/

// Solution-19: Type correction == vs === with NaN

let r = NaN;
console.log(r == r);  // false, because NaN is not equal to anything, including itself
console.log(r === r); // false, because NaN is not equal to anything, including itself
console.log(Object.is(r, r)); // true, because Object.is correctly identifies NaN as the same value 
console.log(isNaN(r)); // true, because isNaN function checks if the value is NaN 
console.log(Number.isNaN(r)); // true, because Number.isNaN function checks if the value is NaN

// TODO: Example-19.1 : Now we are testing Non-Primitive Comparison 

const first = {};
const second = first; // both first and second point to the same object in memory
console.log(first == second);  // true, because both point to the same object
console.log(first === second); // true, because both point to the same object 