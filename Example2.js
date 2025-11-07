/*
TODO: Example-2: Now we are testing on Type Validation Error.
*/

// valid Type Validation

function Multiply(num1,num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "Please provide valid numbers";
    }
    const result = num1 * num2;
    return result;
}
const output = Multiply(10,20);
console.log(output); // 200
// invalid Type Validation
const output2 = Multiply(10,'20');
console.log(output2); // Please provide valid numbers