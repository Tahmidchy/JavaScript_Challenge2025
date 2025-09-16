/*
TODO: Problem-21: Create a string "I love an apple and an apple are tasty!" all " an apple " replace with " Mangoes" key.
*/

// Solution:
let str = "I love an apple and an apple are tasty!";
let result = str.replace(/ an apple /g, " Mangoes ");
console.log(result); // Output: "I love Mangoes and Mangoes are tasty!"