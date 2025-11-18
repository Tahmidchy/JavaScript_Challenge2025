/*
TODO: The console will log this message every two seconds and stop after displaying it 6 times." I am Learning JavaScript"
*/

// Solution:

let count = 0;
const intervalId = setInterval(() => {
    console.log("I am Learning JavaScript"); // Asynchronous (every 2 seconds)
    count++;
    // Stop the interval after logging 6 times
    if (count === 6) {
        clearInterval(intervalId);
    }
},2000);
console.log('Learning started'); // Synchronous