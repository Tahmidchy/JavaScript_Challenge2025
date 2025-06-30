/*
TODO: Problem-23: There will be a player name object with name: Messi, team: Argentina, and goals: 91. Use the object value to extract all values.
*/

// Solution:

const player = {
    name: "Messi",
    team: "Argentina",
    goals: 91
};
// Extract all values from the object
const values = Object.values(player);
console.log(values); // Output: [ 'Messi', 'Argentina', 91 ]
// The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.