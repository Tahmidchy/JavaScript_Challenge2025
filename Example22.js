/*
TODO: Example-22: Now we are testing the concept of callback function with parameters.
*/

// Solution: defining a function that takes another function as a parameter.

function calculator(a,b,callback) {
    const result = a + b;
    callback(result);
}

// defining a callback function that takes the result as a parameter.

function printResult(value) {
    console.log("Result is: :",value);
}
calculator(5,10,printResult); // Result is: : 15

// Another example of callback function with parameters. with Api call ..

function fetchData(url,callback) {
    // Simulating an API call with setTimeout
    setTimeout(() => {
        const data = {name: "John", age: 30}; // Simulated data
        callback(data);
    }, 2000);
}
fetchData("https://api.example.com/user", (data) => {
    console.log("Fetched Data:", data);
}); // Fetched Data: {name: "John", age: 30} after 2 seconds 