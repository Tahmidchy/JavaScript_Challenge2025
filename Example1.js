/*
TODO: Example-1: Now we are testing Single-threaded Execution Context in JavaScript.
*/

// Now we are testing Single-threaded Execution Context in JavaScript.

console.log(1); // Synchronous
console.log(2); // Synchronous
doSomething(); // Synchronous function call
console.log(4); // Synchronous
console.log(5); // Synchronous
console.log(6); // Synchronous

function doSomething() {
    console.log(3); // Synchronous
}

