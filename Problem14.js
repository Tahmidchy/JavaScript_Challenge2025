/*
TODO: Problem - 14: Multiply the odd numbers in an array by 2, create a new array, and return the new array.
*/

// Solution:

function multiplyOddNumbersByTwo(numbers) {
    const newArray = [];
    for (const number of numbers) {
        if (number % 2 !== 0) { // Check if the number is odd
            newArray.push(number * 2); // Multiply by 2 and add to the new array
        }
    }
    return newArray; // Return the new array with multiplied odd numbers
}

// Test the function
console.log(multiplyOddNumbersByTwo([1, 2, 3, 4, 5, 6])); // Output: [2, 6, 10]
console.log(multiplyOddNumbersByTwo([10, 15, 20, 25])); // Output: [30, 50]
console.log(multiplyOddNumbersByTwo([1, 3, 5])); // Output: [2, 6, 10]
console.log(multiplyOddNumbersByTwo([2, 4, 6, 8])); // Output: []
console.log(multiplyOddNumbersByTwo([0, 1, 2, 3 , 4, 5])); // Output: [2, 6, 10]
console.log(multiplyOddNumbersByTwo([-1, -3, -5, -7])); // Output: [-2, -6, -10, -14]
console.log(multiplyOddNumbersByTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 6, 10, 14, 18]
console.log(multiplyOddNumbersByTwo([11, 13, 15, 17, 19])); // Output: [22, 26, 30, 34, 38]
console.log(multiplyOddNumbersByTwo([])); // Output: [] (testing with an empty array)