/*
TODO: Problem-17: Write a function that subtracts 1 from each odd number in an Array, creates a new Array, and returns it.
*/

// Solution: 

function subtractOneFromOddNumbers(numbers) {
    const newArray = [];
    for (const number of numbers) {
        if (number % 2 !== 0) { // Check if the number is odd
            newArray.push(number - 1); // Subtract 1 from the odd number and add to the new array
        }
    }
    return newArray; // Return the new array with modified odd numbers
};
// Test the function
console.log(subtractOneFromOddNumbers([1, 2, 3, 4, 5])); // Output: [0, 2, 4]
console.log(subtractOneFromOddNumbers([2, 4, 6, 8])); // Output: []
console.log(subtractOneFromOddNumbers([10, 15, 20, 25])); // Output: [14, 24]
console.log(subtractOneFromOddNumbers([1, 3, 5])); //    Output: [0, 2, 4]
console.log(subtractOneFromOddNumbers([0, 1, 2, 3, 4, 5])); // Output: [0, 2, 4]
console.log(subtractOneFromOddNumbers([-1, -3, -5, -7])); // Output: [-2, -4, -6, -8]