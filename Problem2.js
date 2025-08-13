/*
TODO: Problem-2: Destructuring the Phone and Price properties from the Item object. const item ={ name: "Mobile",price:20000,phone:"Samsung"}
*/

// Solution:

const item = { name: "Mobile", price: 20000, phone: "Samsung" };
const { phone, price } = item;
console.log(phone); // Output: Samsung
console.log(price); // Output: 20000