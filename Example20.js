/*
TODO: Example-20 : Now we are testing the concept of callback function.
*/

// Solution: defining a function that takes another function as a parameter.

function greeting(greatingHandler) {
    console.log(greatingHandler);
} 
function morningGreet() {
    console.log("Good Morning!");
}
greeting(morningGreet);