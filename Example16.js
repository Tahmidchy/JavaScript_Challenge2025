/*

TODO: in here we are code import from example15.js this testing import from example15.js let's try....

*/

// Example-16: Import code

// Importing functions from Example15.js

import { add, multiply } from './Example15.js'; // ✅ Correct relative path

console.log(add(5, 10));       // Output: 15
console.log(multiply(5, 10));  // Output: 50
// Note: Ensure that Example15.js is in the same directory as this file or adjust the path accordingly.
// If you encounter an error, check the file path and ensure that Example15.js is correctly exported.
// If you are using a module bundler or a specific environment, ensure that it supports ES6 modules.
// If you are running this in a browser, ensure that the script type is set to "module" in your HTML file:
// <script type="module" src="Example16.js"></script>