/*
TODO: Problem-20: const car = { make: "Toyota", model:"Corolla",year:2020 }. Create a copy of this object and create a new object by updating the year to 2032.
*/

// Solution:

const car = { make: "Toyota", model: "Corolla", year: 2020 };
const updatedCarYear = { ...car, year: 2032 }; //  Using Spread Operator to
// create a new object with updated year
console.log(updatedCarYear); // Output: { make: "Toyota", model: "Corolla", year: 2032 }
// Note: The original object 'car' remains unchanged.