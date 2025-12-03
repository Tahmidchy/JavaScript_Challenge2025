// TODO: Example-4: using default parameters in a function

function add(num1,num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
};
// Example usage:
const sum = add(5);
console.log(sum); // Output: 5 (5 + 0)
const sum2 = add(5, 10);    
console.log(sum2); // Output: 15 (5 + 10)