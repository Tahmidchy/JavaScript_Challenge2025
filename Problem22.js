/*
TODO: Problem-22: Given a number object - const numbers = { a : 10,b : 20,c : 30,d :40}; This time use your intelligence to find the sum of the values ​​of all the properties of this object.
*/

// Solution:

const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
};
const values = Object.values(numbers);
let sum = 0;
values.forEach(value => {
    sum += value; // Adds each value to the sum
});
console.log(sum); // Logs the sum of the values of the object
// Example output: 100
// Note: The output will be the sum of all the values in the numbers object.
// The above code uses Object.values() to get an array of the values of the numbers object, and then uses forEach to iterate over that array and calculate the sum.
// The final sum is logged to the console.
// The output will be the sum of all the values in the numbers object.
// The above code uses Object.values() to get an array of the values of the numbers object, and then uses forEach to iterate over that array and calculate the sum.