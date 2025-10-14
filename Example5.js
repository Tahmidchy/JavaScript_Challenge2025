/*
TODO: Example-5: Now we are Testing primitive pass by value.
*/

// Example-5: Primitive Types

function changeValue(num) {
    num = 20; // Reassigning num to a new value
    console.log("Inside function:", num); // Output: Inside function: 20
}
let originalNum = 10;
console.log("Before function call:", originalNum); // Output: Before function call: 10
changeValue(originalNum);
console.log("After function call:", originalNum); // Output: After function call: 10
// originalNum remains unchanged because primitives are passed by value 