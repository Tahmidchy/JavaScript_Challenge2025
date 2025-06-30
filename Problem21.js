/*
TODO: Problem-21: const books = {book1: "Harry potter", book2: "Lord of the rings", book3: "The Hobbit"}; Then run the above loop and log all the book names to the console.
*/

// Solution:

const books = {
    book1: "Harry potter",
    book2: "Lord of the rings",
    book3: "The Hobbit"
};
const bookNames = Object.keys(books);
for (const bookName of bookNames) {
    console.log(books[bookName]); // Logs the names of the books
    // Example output: Harry potter, Lord of the rings, The Hobbit
    // Note: The output will be in the order of the properties defined in the object.
}
// The above code uses Object.keys() to get an array of the keys of the books object, and then iterates over that array to log each book name to the console.
