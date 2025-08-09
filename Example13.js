/*
TODO: We are now using Spread Operator for copy full array and Rest Operator for copy only the arguments.
*/

// Example-13: Using Spread Operator and Rest Operator for copying arrays and arguments

const friends = [4,5,87,9];
// Using Spread Operator to copy the array
const bondhu = friends; // This creates a reference to the same array
bondhu.push(100); // Modifying the new array also modifies the original array
console.log(bondhu); // Output: [4, 5, 87, 9, 100]
console.log(friends); // Output: [4, 5, 87, 9, 100]

// To create a true copy of the array, we can use the Spread Operator
const bondhuCopy = [...friends]; // This creates a new array with the same elements
bondhuCopy.push(200); // Modifying the new array does not affect the original array
console.log(bondhuCopy); // Output: [4, 5, 87, 9, 100, 200]
console.log(friends); // Output: [4, 5, 87, 9]

// Using spread operator to assign values together when we are assign spread operator for new array.
const friends1 = [4, 5, 87, 9];
const copyFriends2 = [...friends1,9999]; // This creates a new array with the same elements
console.log(copyFriends2); // Output: [4, 5, 87, 9, 9999]
