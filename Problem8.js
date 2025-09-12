/*
TODO: Program-8: Check if const language = 'JavaScript'; contains script by ignoring case
*/

//Solution: 

const language = 'JavaScript';
const containsScript = language.toLowerCase().includes('script'); // Check if 'script' is in the string, ignoring case
console.log(containsScript); // Output: true