/*
TODO: Example-3: Now we are testing Non-Primitive type testing. with re-assign.
*/

// Example-3: Non-Primitive Types

let p = {job: "Developer"};
let q = p; // Copying the reference of p to q
console.log(p, q); // Output: { job: 'Developer' } { job: 'Developer' }
q = {job: "backEnd"}; // Reassigning q to a new object
console.log(p, q); // Output: { job: 'Developer' } { job: 'backEnd' }