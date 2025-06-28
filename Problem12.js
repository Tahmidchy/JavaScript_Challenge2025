/*
TODO: Problem-12: Create a library object and add these properties to that object: Name: Public Library, Location: Dhaka, and Books: 5000. Log the location to the console using dot notation.
*/

// Solution:

const library = {
    name: 'Public Library',
    location: 'Dhaka',
    books: 5000,
    established: 1990,
    address: {
        street: '123 Main St',
        city: 'Dhaka',
        zipCode: '1212'
    },
    services: ['Reading Room', 'Internet Access', 'Book Lending'],
};
console.log(library.location); // Output: Dhaka
// console.log(library.name); // Output: Public Library
// console.log(library.books); // Output: 5000
// console.log(library.established); // Output: 1990
// console.log(library.address); // Output: { street: '123 Main St', city: 'Dhaka', zipCode: '1212' }