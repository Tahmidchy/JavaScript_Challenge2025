/*
TODO: Problem-3: rectagle Create a getArea function to find its area, where if the length and width are not numbers, a validation message will be given. To find the area, you just need to multiply the length and width.
*/

// valid Type Validation

function getArea(length, width){
    if(typeof length !== 'number' || typeof width !== 'number'){
        return "Please provide valid numbers for length and width";
    }
    return length * width;
}
const length1 = 5;
const width1 = 10;
const output1 = getArea(length1, width1);
console.log(output1); // 50
// invalid Type Validation
const length2 = "five";
const width2 = 10;
const output2 = getArea(length2, width2);
console.log(output2); // Please provide valid numbers for length and width