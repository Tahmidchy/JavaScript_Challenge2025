/*
TODO: Problem-9: There is a product object const product = { name : "Laptop", price:50000, brand : "Dell" }; Keep the remaining properties except the name in a separate object.
*/

// Solution:
const product = { name: "Laptop", price: 50000, brand: "Dell" };
const { name, ...remainingProperties } = product;
console.log(remainingProperties); // Output: { price: 50000, brand: 'Dell' }
// The remainingProperties object now contains all properties of product except for name.
// You can also verify the output by logging it
console.log(remainingProperties); // { price: 50000, brand: 'Dell' }
// This code uses destructuring to extract the 'name' property and collect the rest into 'remainingProperties'.
// This is a concise way to keep the remaining properties in a separate object.
// The remainingProperties object now contains all properties of product except for name.
console.log(name); // Output: Laptop
// The 'name' variable still holds the value of the name property.