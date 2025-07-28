/*
TODO: Problem-15: Write a function that returns "No odd numbers Found" if there are no odd numbers in an array, and "Odd number found" if there are odd numbers.
*/

// Solution:

function checkOddNumbers(numbers) {
    for (const number of numbers) {
        if (number % 2 !== 0) { // Check if the number is odd
            return "Odd number found"; // Return if an odd number is found
        }
    }
    return "No odd numbers Found"; // Return if no odd numbers are found
};
// Test the function
console.log(checkOddNumbers([1, 2, 3, 4, 5])); // Output: "Odd number found"
console.log(checkOddNumbers([2, 4, 6, 8])); // Output: "No odd numbers Found"
console.log(checkOddNumbers([10, 12, 14])); // Output: "No odd numbers Found"
console.log(checkOddNumbers([1, 3, 5])); // Output: "Odd number found"