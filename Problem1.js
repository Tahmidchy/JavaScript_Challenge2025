/*
TODO: Problem-1: Separates brand property from object. const product ={ name:"Laptop",price:50000,brand:"Dell"};
*/

// Solution:

const product = { name: "Laptop", price: 50000, brand: "Dell" };
const { brand, ...rest } = product;
console.log(brand); // Output: Dell
console.log(rest); // Output: { name: 'Laptop', price: 50000 }