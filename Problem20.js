/*
TODO: Problem-20:You have created an object named Bike with properties Brand: "Hero", Price: 120000, and Model: "Splendor". Use the object's values() method to retrieve all the values.
*/

// Solution: 

const bike = {
    Brand: "Hero",
    Price: 120000,
    Model: "Splendor"
};
const values = Object.values(bike);
for (const value of values){
    console.log(value); // Logs the values of the object
    // Example output: Hero, 120000, Splendor
    // Note: The output will be in the order of the properties defined in the object.

}