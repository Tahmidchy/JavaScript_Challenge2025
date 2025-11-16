/*
TODO: Example-2: Now we are testing Synchronous with setTimeout in JavaScript.
*/

// Now we are testing Synchronous with setTimeout in JavaScript.

console.log('A'); // Synchronous
setTimeout(() => {
    console.log('B'); // Asynchronous (after 0 ms)
},1000);
console.log('C'); // Synchronous
console.log('D'); // Synchronous
setTimeout(() => {
    console.log('E'); // Asynchronous (after 0 ms)
},0);
console.log('F'); // Synchronous

// Output:
// A
// C
// D
// F
// E
// B