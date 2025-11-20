// In here we are using JavaScript destructing with Function arguments

// Solution 5:

function doubleThem(a,b) {
    return [a * 2, b * 2];
}
// In here we are using JavaScript destructing with Function arguments
const [firstDouble, secondDouble] = doubleThem(5, 10);
//result
console.log(firstDouble, secondDouble); // Output: 10