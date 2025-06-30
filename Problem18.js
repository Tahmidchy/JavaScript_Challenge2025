/*
TODO: Problem-18: You are given an object called a laptop - const laptop = { brand: "Dell", model: "inspiron", price: 45000 }; This time, run a for loop and print each property and its value.
*/

// Solution:

const laptop = { brand: "Dell", model: "inspiron", price: 45000 };
for (const key in laptop){
    const value = laptop[key];
    console.log(`${key}: ${value}`); // Logs the key and value of the object
    // Example output: brand: Dell, model: inspiron, price: 45000
}