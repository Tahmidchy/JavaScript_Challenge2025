/*
TODO: Problem-1: Write a function that returns the first letter of the name, and if the input is not a string, it will give a validation message.
*/

// valid Type Validation

function getFirstLetter(name){
    if(typeof name !== 'string'){
        return "Please provide a valid string";
    }
    return name.charAt(0);
}
const name1 = "JavaScript";
const output1 = getFirstLetter(name1);
console.log(output1); // J
// invalid Type Validation
const name2 = 12345;
const output2 = getFirstLetter(name2);
console.log(output2); // Please provide a valid string