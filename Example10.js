/*
TODO: Example-10: REST operator with an Object
*/
// Solution:

const person = { name:'Alice', age: 30, city: 'New York', country: 'USA' };
const { name, age, city, ... DetailsInfo } = person;
console.log(name);  // Output: Alice
console.log(age);   // Output: 30
console.log(city);  // Output: New York
console.log(DetailsInfo); // Output: { country: 'USA' }
// The DetailsInfo object contains the remaining properties not destructured