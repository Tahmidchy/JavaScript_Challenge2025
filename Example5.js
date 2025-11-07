/*
TODO: Example-5: Now we are testing on Syntax Errors and Validation Errors in JavaScript. Below are two examples demonstrating how to handle these errors effectively.
1. Syntax Error Example:
   In this example, we will demonstrate a common syntax error and how to fix it.
*/

// Syntax Error Example
/*
for(Let i = 0; i < 5; i++ { // Missing closing parenthesis
    console.log(i);
} // Syntax Error: Unexpected token '{' */

// Fixed Syntax Error
for(let i = 0; i < 5; i++){ // Corrected 'Let' to 'let' and added closing parenthesis
    console.log(i);
}