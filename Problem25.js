/*
TODO: Problem-25: Suppose you have a Headphone object with Brand: "Sony", Price: 3000, and Color: "Red". Try using the ObjectFreeze() method and then adding another new property to see if it works.
*/

// Solution: 

const Headphone = {
    Brand: "Sony",
    Price: 3000,
    Color: "Red"
};
Object.freeze(Headphone); // Freeze the object to prevent modifications
Headphone.Brand = "Bose"; // Attempt to change the Brand property 
Headphone.Price = 4000; // Attempt to change the Price property
Headphone.Color = "Blue"; // Attempt to change the Color property
console.log(Headphone); // Output: { Brand: "Sony", Price: 3000, Color: "Red" }
// // The properties of the Headphone object remain unchanged, and any attempts to modify them are ignored.