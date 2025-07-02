/*
TODO: Problem-29: Create an animal object with name: Tiger, location: Sundarbans. Now do something so that the location of the tiger is not changed.
*/

// Solution:

const animal = {
    name: "Tiger",
    location: "Sundarbans"
}
Object.freeze(animal); // Freeze the object to prevent any changes
animal.location = "Amazon"; // Try to change the location property
console.log(animal); // Output: { name: "Tiger", location: "Sundarbans" }
// The location property remains unchanged because the object is frozen.