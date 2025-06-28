/*
TODO: Problem-10: You have a favorite place. You create an object called favplace and store some information in it, such as name: "Cox's Bazar", distance: "400 km", and popularity: "High". Now log the popularity property console using bracket notation.
*/

// Solution:

const favplace = {
    name: "Cox's Bazar",
    distance: "400 km",
    popularity: "High",
    bestTimeToVisit: "November to February",
    activities: ["Beach", "Water Sports", "Sightseeing"],
    accommodation: ["Hotels", "Resorts", "Guesthouses"],
    cuisine: ["Seafood", "Bengali Cuisine", "Street Food"],
};
console.log(favplace["popularity"]); // Output: High
// or
// console.log(favplace["name"]); // Output: Cox's Bazar
// console.log(favplace["distance"]); // Output: 400 km
// console.log(favplace["bestTimeToVisit"]); // Output: November to February
// console.log(favplace["activities"]); // Output: [ 'Beach', 'Water Sports', 'Sightseeing' ]
// console.log(favplace["accommodation"]); // Output: [ 'Hotels', 'Resorts', 'Guesthouses' ]
// console.log(favplace["cuisine"]); // Output: [ 'Seafood', 'Bengali Cuisine', 'Street Food' ]
// console.log(favplace["popularity"]); // Output: High