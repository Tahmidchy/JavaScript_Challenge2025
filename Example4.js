/*
TODO: Example-4: Now we are testing Synchronous with setInterval in JavaScript.
*/

// Now we are testing Synchronous with setInterval in JavaScript.

let num = 0;
const intervalId = setInterval(() => {
    num++;
    console.log(num); // Asynchronous (every 1 second)
    // Stop the interval after logging 5 times
    if (num === 5) {
        clearInterval(intervalId);
    }
},1000);
console.log('Counting started'); // Synchronous