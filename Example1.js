// In here testing how Destructuring works in JavaScript.

// Solution 1:

const actor = {
    name: 'Tom Cruise',
    age: 60,
    movies: ['Top Gun', 'Mission Impossible'],
    money: 50000000
}
// Destructuring the object to get the values of name, age, movies and money
const name = actor.name;
const age = actor.age;
const movies = actor.movies;
const money = actor.money;
console.log(name, age, movies, money); // Output: Tom Cruise 60 [ 'Top Gun', 'Mission Impossible' ] 50000000