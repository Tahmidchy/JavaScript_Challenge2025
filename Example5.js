//TODO: Using default parameters in a function 

function add(num1 = 0, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
};
// Example usage:
const sum = add();
console.log(sum); // Output: 0 (0 + 0)
const total = add(5, 10);
console.log(total); // Output: 15 (5 + 10)