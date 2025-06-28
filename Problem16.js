/*
TODO: Problem-16: Create an object called Book that contains the name of the book, the name of the book, and the price of the book. Then log all the properties (keys) and all the values ​​of the object to the console.
*/

// Solution: 

const Book = {
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$10.99"
};
const keys = Object.keys(Book);
for (const key of keys) {
    console.log(key); // Logs the keys of the object
}
const values = Object.values(Book);
for (const value of values) {
    console.log(value); // Logs the values of the object
};