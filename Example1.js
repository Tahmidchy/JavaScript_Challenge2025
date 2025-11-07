/*
TODO: Example-1: Now we are testing on Type Validation Error.
*/

// valid Type Validation

function sum(num1,num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "Please provide valid numbers";
    }
    const result = num1 + num2;
    return result;
}
const output = sum(10,20);
console.log(output); // 30
// invalid Type Validation
const output2 = sum(10,'20');
console.log(output2); // Please provide valid numbers