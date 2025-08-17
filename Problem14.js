/*
TODO: Problem-14: Write a function that places all the parameters into an array using the rest operator, then adds the arguments. The function returns the average of the elements of the array.
*/

// Solution:

function averageRestParameters(...args) {
    // args will contain all parameters as an array
    if (args.length === 0) return 0; // Handle case with no arguments

    let sum = 0;
    for (let num of args) {
        sum += num;
    }
    return sum / args.length; // Return the average
}
// Test the function
console.log(averageRestParameters(1, 2, 3, 4, 5)); // Output: 3
console.log(averageRestParameters(10, 20, 30)); // Output: 20
console.log(averageRestParameters()); // Output: 0 (no arguments case)  