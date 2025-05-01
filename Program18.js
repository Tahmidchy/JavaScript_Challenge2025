/*
TODO: Program-18: Write a program and see if 25 == '25' and 25 === '25' between 25 and '25', will the output be the same? If not, please explain the comments.
*/

//Solution: 

let num = 25;
let num1 = '25'; //string literal
console.log(num == num1); //true
console.log(num === num1); //false
//Explanation:
//The == operator checks for equality in value, but it does not check for equality in type.
//The === operator checks for equality in both value and type. In this case, the value of num and num1 are equal, but the type is different (number and string), so the === operator returns false.