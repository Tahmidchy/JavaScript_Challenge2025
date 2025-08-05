// In here we testing javaScript Object destructuring with renamed properties and default values.

// Solution 3:

const book= {
    title: "1984", author: "George Orwell"};
    const {title: BookTitle, author: BookAuthor} = book;
//result
console.log(BookTitle); // Output: 1984
console.log(BookAuthor); // Output: George Orwell