/*
TODO: Example-19: Now we are testing complex part of string method reverse method
*/

// Example-19: 

const sentence = " I am learning Web Dev";
let reverse = "";
for(const letter of sentence){
    reverse = letter + reverse;
}
console.log(reverse);