/*

TODO: In here we are testing the default export of a JavaScript module.
TODO: This is a very basic test and does not cover all the cases.
TODO: Now we import this function in Example18.js to see if it works correctly.

*/

// Example-18: Importing default export

import SpecialGreet from './Example17.js'; // ✅ Correct relative path
console.log(SpecialGreet()); // Output: Hello, World!
// Note: Ensure that Example17.js is in the same directory as this file or adjust the path accordingly.
// If you encounter an error, check the file path and ensure that Example17.js is correctly exported.
// If you are using a module bundler or a specific environment, ensure that it supports ES6 modules.
// If you are running this in a browser, ensure that the script type is set to "module" in your HTML file:
// <script type="module" src="Example18.js"></script>