/*
TODO: Import code from example18.js that's time using alias for import
TODO: This is a basic test to see if the import works correctly.
*/
// Example-20: Import code with alias

// Example20.js
// Importing with alias
import { add as sum, multiply as mult } from './Example19.js'; // ✅ Correct aliases

console.log(sum(5, 10));   // Output: 15
console.log(mult(5, 3));   // Output: 15

// Note: Ensure that Example19.js is in the same directory as this file or adjust the path accordingly.
// If you encounter an error, check the file path and ensure that Example19.js is correctly exported.
// If you are using a module bundler or a specific environment, ensure that it supports ES6 modules.
// If you are running this in a browser, ensure that the script type is set to "module" in your HTML file:
// <script type="module" src="Example20.js"></script>