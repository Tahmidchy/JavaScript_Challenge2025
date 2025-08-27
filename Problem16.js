/*
TODO: Problem-16: Create a new array named myFruits, where const fruits =["Apple","Banana","Mango"] will contain the elements of this array, and at the end will be papaya and orange.
*/

//Solution: 

const fruits = ["Apple", "Banana", "Mango"];
const myFruits = [...fruits, "Papaya", "Orange"]; // Using Spread Operator to add elements
console.log(myFruits); // Output: ["Apple", "Banana", "Mango", "Papaya", "Orange"]