/*
TODO: Problem-8: Write a function that converts inches to feet. We know that there are 12 inches in a foot. ( this problem from example 1 as a batter testing using this.)
*/

// Solution :

function inchesToFeet(inch){
    const feet = inch / 12;
    return feet;
}
// Testing the function using example 1
const shuvoHeight = inchesToFeet(75);
console.log(shuvoHeight);