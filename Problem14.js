/*
TODO: Problem-14: Given a string "for,while,for-in,for-of,do-while". Use split to separate the names of the loops from this string.
*/

// Solution:

let loopsStr = "for,while,for-in,for-of,do-while";
let loopsArray = loopsStr.split(",");
console.log(loopsArray); // Output: ["for", "while", "for-in", "for-of", "do-while"]