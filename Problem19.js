/*
TODO: Problem-19: const young = { name: "Arif", age: 30, country: " B Baria" }. Make a copy of this object and print it with all the properties except country in the new object.
*/

// Solution: 

const young = { name: "Arif", age: 30, country: "B Baria" };
const { country, ...youngWithoutCountry } = young; // Using destructuring to exclude 'country' property
console.log(youngWithoutCountry); // Output: { name: "Arif", age: 30 }