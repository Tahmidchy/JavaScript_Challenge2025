/*
TODO: Problem-28: Create a gadget object with name: iphone, price: 120000, and color: black. Delete the price using delete. Then try to access the price property and see if it works.
*/

// Solution:

const gadget = {
    name: "iphone",
    price: 120000,
    color: "black"
}
delete gadget.price; // Delete the price property
console.log(gadget.price); // Try to access the price property
// Output: undefined  
console.log(gadget); // Output: { name: "iphone", color: "black" }
// The price property has been deleted, so accessing it returns undefined.
// The price property has been deleted, so accessing it returns undefined.  