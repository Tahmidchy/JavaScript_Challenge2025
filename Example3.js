/*
TODO: Example-3: Now we are testing Synchronous with setInterval in JavaScript.
*/

// Now we are testing Synchronous with setInterval in JavaScript.

console.log('X'); // Synchronous
setInterval(() => {
    console.log('Y'); // Asynchronous (every 1 second)
},1000);
console.log('Z'); // Synchronous

// Output:
// X
// Z
// Y
// Y
// Y
// ... (Y continues to log every second)