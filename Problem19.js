/*
TODO: Problem-19: Create a function that removes duplicate values ​​from an array and stores the single values ​​in a new array.
*/
// Solution:

function noDuplicate(array) {
    const unique = [];
    for (const items of array) {
        if(unique.includes(items) === false) { // Check if the item is not already in the unique array
            unique.push(items); // If not, add it to the unique array
        }
    }
    return unique; // Return the array with unique items
};
// Test the function
const uniqueArray = noDuplicate([1, 2, 3, 4, 5, 1, 2, 3]);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]