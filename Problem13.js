/*
TODO: Problem-13: Create a movie object with the title Inception, director: Nolan, rating: 9. Extract the rating property using bracket notation.
*/

// Solution:

const movie = {
    title: 'Inception',
    director: 'Nolan',
    rating: 9,
    releaseYear: 2010,
    genre: 'Sci-Fi',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
    duration: 148, // in minutes
    boxOffice: 836800000, // in USD
    awards: {
        oscars: 4,
        goldenGlobes: 2,
        bafta: 1
    },
};

console.log(movie['rating']); // Output: 9
// console.log(movie.title); // Output: Inception
// console.log(movie.director); // Output: Nolan