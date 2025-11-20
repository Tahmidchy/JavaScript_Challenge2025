// In here we are using JavaScript destructuring for using Function arguments

// Solution 6:

function introduce({name,age}){
    console.log(`Name: ${name}, Age: ${age}`);
}
const user = { name: "Alice", age: 30 , hobby: "Reading"};
introduce(user); // Output: Name: Alice, Age: 30