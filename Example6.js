/*
TODO: Example-6: Now we are testing on Type Errors and Reference Errors in JavaScript. Below are two examples demonstrating how to handle these errors effectively.
1. Type Error Example:
   In this example, we will demonstrate a common type error and how to fix it.
*/

// Type Error Example
function addNumbers(a, b){
    return a + b;
}
const num1 = 10;
// const num2 is not defined; this will cause a Reference Error
try {   
    const result = addNumbers(num1, num2); // Reference Error: num2 is not defined
    console.log(result);
} catch (error) {
    console.log("Reference Error: " + error.message);
}

// Fixed Type Error by defining num2
const num2 = 20;
const result = addNumbers(num1, num2);
console.log(result); // 30

/*
2. Reference Error Example:
   In this example, we will demonstrate a common reference error and how to fix it.
*/
// Reference Error Example
try {
    console.log(myVariable); // Reference Error: myVariable is not defined
} catch (error) {
    console.log("Reference Error: " + error.message);
}
// Fixed Reference Error by defining myVariable
const myVariable = "Now I am defined!";
console.log(myVariable); // Now I am defined!
