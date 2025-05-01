/*
TODO: Problem-20: Write a program and see if "test" and "TEST" are equal if "test" == "TEST" and "test" === "TEST". What will be the output?
*/

//Solution: 

let str1 = "test";
let str2 = "TEST";
console.log(str1 == str2); // false
console.log(str1 === str2); // false 

//Explain: case sensitive string comparison in JavaScript. The == operator checks for equality in value, while the === operator checks for equality in both value and type. In this case, "test" and "TEST" are not equal in value or type, so both comparisons return false.
