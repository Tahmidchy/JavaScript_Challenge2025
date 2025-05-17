/*
TODO: Problem-20: You want to write a program that checks if a fruit called "mango" exists in a list. If it does, the output will say "Mango exists," and if it does not, it will say "I need mangoes, I have to climb the tree to get them." The array of fruits contains "apples", "bananas", "mangoes", and "lychees".
*/

// Solution:

let fruits = ["apples", "bananas", "mangoes", "lychees"];
if(fruits.includes("mangoes")) {
    console.log("Mango exists"); // Output if mango exists in the array
} else {
    console.log("I need mangoes, I have to climb the tree to get them."); // Output if mango does not exist in the array
}