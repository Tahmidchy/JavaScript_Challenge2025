/*
TODO: Example-21: Now we are testing the concept of callback function with parameters.
*/

// Solution: defining a function that takes another function as a parameter.

function greeting(greetingHandler) {
    greetingHandler()
}
function morningGreet(){
    console.log("Good Morning!");
}
greeting(morningGreet);