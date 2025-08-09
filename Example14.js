/*
TODO: We are using Spread Operator new elements add by spread operator and Rest Operator for copy only the arguments.
*/

//Example-14: 

const fruits = ["Apple","Banana"];
const moreFruits =["Mango",...fruits, "Orange"]; // Using Spread Operator to add elements
console.log(moreFruits); // Output: ["Mango", "Apple", "Banana", "Orange"]

// Concatenate two arrays using Spread Operator

const Array1 = [1, 2, 3];
const Array2 = [4, 5, 6];
const combinedArray = [...Array1, ...Array2]; // Using Spread Operator to concatenate arrays
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

//object copy using Spread Operator

const person = {name: "Amit", age: 25};
const clonedPerson = {...person}; // Using Spread Operator to copy object
console.log(clonedPerson); // Output: {name: "Amit", age: 25}

// Adding new properties to the cloned object
clonedPerson.city = "Dhaka"; // Adding a new property
console.log(clonedPerson); // Output: {name: "Amit", age: 25, city: "Dhaka"}
console.log(person); // Output: {name: "Amit", age: 25} (original object remains unchanged)