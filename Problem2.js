/*
TODO: Problem-2: Write a function that will return the last element of an array, or give a warning message if the input is not an array.
*/

// valid Type Validation

function getLastElement(arr){
    if(!Array.isArray(arr)){
        return "Please provide a valid array";
    }
    return arr[arr.length - 1];
}
const array1 = [1, 2, 3, 4, 5];
const output1 = getLastElement(array1);
console.log(output1); // 5
// invalid Type Validation
const array2 = "Not an array";
const output2 = getLastElement(array2);
console.log(output2); // Please provide a valid array