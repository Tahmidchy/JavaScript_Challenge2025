/*
TODO: Problem-13: There is an array.language =["JavaScript", "Python", "Java", "C++"] This array will convert each language name into a string and add a semicolon between each one.
*/

// Solution:

let languages = ["JavaScript", "Python", "Java", "C++"];
let languagesString = languages.join("; ");
console.log(languagesString); // Output: "JavaScript; Python; Java; C++"