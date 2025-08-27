/*
TODO: Problem-18: const website ={ name: "MySite", type: "e-commerce", status:"active"}. Create a new object and print it by adding the new property theme: "Dark" to this object.
*/

// Solution:

const website = { name: "MySite", type: "e-commerce", status: "active" };
const updatedWebsite = { ...website, theme: "Dark" }; // Using Spread Operator to add a new property
console.log(updatedWebsite); // Output: { name: "MySite", type: "e-commerce", status: "active", theme: "Dark" }