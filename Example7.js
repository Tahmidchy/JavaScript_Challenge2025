/*
TODO: Example-7: Now we are Reference Errors in JavaScript. Below is an example demonstrating how to handle this error effectively.
1. Reference Error Example:
   In this example, we will demonstrate a common reference error and how to fix it.
*/

// Reference Error Example
try {
    console.log(undefinedVariable); // Reference Error: undefinedVariable is not defined
} catch (error) {
    console.log("Reference Error: " + error.message);
}

// Fixed Reference Error by defining undefinedVariable
const undefinedVariable = "Now I am defined!";
console.log(undefinedVariable); // Now I am defined!
/*
2. Another Reference Error Example:
   In this example, we will demonstrate another common reference error and how to fix it.   */
// Another Reference Error Example
function greet() {  
    return "Hello, " + name + "!"; // Reference Error: name is not defined
}
try {
    console.log(greet());
} catch (error) {
    console.log("Reference Error: " + error.message);
}