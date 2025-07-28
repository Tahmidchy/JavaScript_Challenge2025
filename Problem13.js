/*
TODO: Problem-13 : Write a function to find the average of the even numbers in an array, testing your function with different values ​​to see if it works.
*/

// Solution:

function EvenAverage(numbers) {
    const even = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            even.push(number);
        }
    }
    let sum = 0;
    for (const num of even) {
        sum += num;
    }
    return even.length > 0 ? sum / even.length : 0; // Return 0 if no even numbers
}
// Test the function
console.log(EvenAverage([1, 2, 3, 4, 5, 6])); // Output: 4 (average of 2, 4, 6)
console.log(EvenAverage([10, 15, 20, 25])); // Output: 15 (average of 10, 20)
console.log(EvenAverage([1, 3, 5])); // Output: 0 (no even numbers)
console.log(EvenAverage([2, 4, 6, 8])); // Output: 5 (average of 2, 4, 6, 8)
console.log(EvenAverage([0, 1, 2, 3, 4, 5])); // Output: 2 (average of 0, 2, 4)
console.log(EvenAverage([-2, -4, -6, -8])); // Output: -5 (average of -2, -4, -6, -8)
console.log(EvenAverage([1, 2, 3, 4, 5 , 6, 7, 8, 9, 10]));  // Output: 6 (average of 2, 4, 6, 8, 10)