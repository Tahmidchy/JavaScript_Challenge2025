/* 
TODO: Problem-17: Suppose between the two strings "JavaScript" and 'JavaScript', if "JavaScript" == 'JavaScript' and "JavaScript" === 'JavaScript', will the same output be produced? If so, can you explain this?
*/

// Solution: 

let str1 = "JavaScript";
let str2 = 'JavaScript';
console.log(str1 == str2); // true
console.log(str1 === str2); // true
// Explanation: In JavaScript, the '==' operator checks for equality in value, while the '===' operator checks for equality in both value and type. Since both strings have the same value and type,