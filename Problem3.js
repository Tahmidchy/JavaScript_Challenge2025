/*
TODO: Problem-3: It will display one number at a time every two seconds, starting at 131 and increasing by two each time.
*/

// Solution: 

let number = 131;
const intervalId = setInterval(() => {
    number += 2;
    console.log(number); // Asynchronous (every 2 seconds)
    // Stop the interval after logging 5 times
    if (number === 215) {
        clearInterval(intervalId);
    }
},2000);
console.log('Number sequence started'); // Synchronous