/*
TODO: Problem-19: You create an array with the names of 5 books. Now you have finished the first book. So, remove the first book from the array and log the new array to the console.
*/
// Solution:

let books = ["Book1", "Book2", "Book3", "Book4", "Book5"];
books.shift(); // Remove the first book from the array
console.log(`Updated array after removing the first book: ${books}`); // Log the new array to the console
// Output: Updated array after removing the first book: Book2,Book3,Book4,Book5