/*
TODO: Problem-13: Write a function that takes all but two parameters using the rest operator. The function will return the sum of the remaining parameters.
*/

// Solution: 

function sumRestParameters(a,b,...rest) {
    //rest will contain all parameters except the first two
    let sum = 0;
    for (let num of rest) {
        sum += num;
    }
    return sum;
};
// Test the function
console.log(sumRestParameters(1, 2, 3, 4, 5)); // Output: 12
console.log(sumRestParameters(10, 20, 30)); // Output: 30

/*
a and b are the first two parameters.

...rest collects all remaining arguments into an array.

The function sums up only the values in rest, ignoring a and b.
*/