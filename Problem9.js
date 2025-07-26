/* 
TODO: Problem-9: Write a function that converts inches to feet. We know that there are 12 inches in a foot. ( this problem from example 2 as a batter testing using this.) But in here we are also show in "6 feet 3 inches" format.
*/
// Solution: 

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + " feet " + inchRemaining + " inches";
    return result;
}
// Testing the function with a value of 75
const shuvoHeight = inchToFeet2(75);
console.log(shuvoHeight); // Output: 6 feet 3 inches