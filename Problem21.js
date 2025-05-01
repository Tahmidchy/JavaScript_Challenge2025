/*
TODO: Problem-21: If the value of variable X is 15 and the value of variable Y is "20", what will be the output if variable X != variable Y and variable X !== variable Y?
*/
//Solution: 

let varibaleX = 15;
let varibaleY = "20";
console.log(varibaleX != varibaleY); // TRUE
console.log(varibaleX !== varibaleY); // TRUE 

//Explain: The != operator checks for inequality between two values. It returns true if the values are not equal. The !== operator checks for inequality between two values and also checks if the values are of different data types . It returns true if the values are not equal and are of different data types. In this case , the value of variable X is a number and the value of variable Y is a string. Therefore , the output will be true for both != and !== operators.