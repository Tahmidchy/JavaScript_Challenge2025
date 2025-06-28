/*
TODO: Problem-11: You create a new object called Phone. That object will have Brand, Color, and Price as properties. You will log the price to the console using bracket notation.
*/

// Solution:

const phone = {
    Brand: "Apple",
    Color: "Black",
    Price: "$999.99",
    Storage: "256GB",
    RAM: "8GB",
    Model: "iPhone 14 Pro",
    Battery: "3095 mAh",
    Camera: "48MP",
    OperatingSystem: "iOS 16",
    Year: 2023,
}
console.log(phone["Price"]); // Output: $999.99
// console.log(phone["Brand"]); // Output: Apple
// console.log(phone["Color"]); // Output: Black