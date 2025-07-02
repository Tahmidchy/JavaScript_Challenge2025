/*
TODO: Problem-27: const Book = {Title: Harry Potter, Author: Jk Rowling, Pages: 500}; Use Object Seal() and then try changing the Author property.
*/

// Solution:
const Book = {
    Title: "Harry Potter",
    Author: "Jk Rowling",
    Pages: 500
}
Object.seal(Book); // Seal the object to prevent adding or removing properties
Book.Author = "Jk Rowling (Sealed)"; // Try to change the Author property
console.log(Book); // Output: { Title: "Harry Potter", Author: "Jk Rowling (Sealed)", Pages: 500 }
// The Author property is successfully changed, but no new properties can be added or existing properties removed.