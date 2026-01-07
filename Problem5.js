/*
TODO: Problem-5: For movies, there will be movie details like -title, release years, actors and ratings. Actors will be an array (where the actors will be named) and ratings will be a number, then convert it to JSON . stringfy, after converting it, convert it back to JavaScript object like this
*/

// Solution:

const movie = {
    title: 'Inception',
    releaseYear: 2010,
    actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    ratings: 8.8
}
const movieJSON = JSON.stringify(movie);
console.log(movieJSON);