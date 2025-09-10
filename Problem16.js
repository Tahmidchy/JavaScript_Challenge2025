/*
TODO: Problem-16:  const str1 = "Push", const str2 = "Pop", const str3 = "shift", const str4 = "unshift" Use concat to create a string by combining these strings.
*/

// Solution: 

const str1 = "Push";
const str2 = "Pop"; 
const str3 = "shift";
const str4 = "unshift";
const combinedStr = str1.concat(" ", str2, " ", str3, " ", str4);
console.log(combinedStr); // Output: "Push Pop shift unshift"