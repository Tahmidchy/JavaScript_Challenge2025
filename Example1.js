/*
TODO: Example-1: Now we are testing the JSON Converter 
*/

// Solution code:

const user = {
    name: "John Doe",
    age: 30,
    city: "New York"
};
// Convert the user object to a JSON string
const jsonString = JSON.stringify(user);
console.log("JSON String:", jsonString);