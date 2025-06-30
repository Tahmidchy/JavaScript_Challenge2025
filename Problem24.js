/*
TODO: Problem-24: Create a building object with Floor: 10, Address: {Street Main Road, City Dhaka}, and Type: Commercial. Now run a for in loop and print all the properties and values.
*/

// Solution:

const building = {
    Floor: 10,
    Address: {
        Street: "Main Road",
        City: "Dhaka"
    },
    Type: "Commercial"
};
for (const key in building) {
    const value = building[key];
    console.log(key,value);
};
// The for...in loop iterates over the enumerable properties of an object, allowing you to access both the property names (keys) and their corresponding values. In this case, it will print all the properties and values of the building object.
// The output will be:
// Floor 10
// Address { Street: 'Main Road', City: 'Dhaka' }
// Type Commercial
// Note: The Address property is an object itself, so if you want to print its properties as well, you can use another for...in loop inside the first one.
// For example:
// for (const key in building.Address) {
//     const value = building.Address[key];
//     console.log(key, value);