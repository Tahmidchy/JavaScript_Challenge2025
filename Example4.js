/*
TODO: Example-4: Now we are testing on Object Type Validation Error.
*/

// valid Type Validation

function getPrice(product){
    if(typeof product !== 'object' || product === null){
        return "Please provide valid product object";
    }
    if(typeof product.price !== 'number'){
        return "Please provide valid price in product object";
    }
    const price = product.price;
    return price;
}
const product1 = {name: "Laptop", price: 1000};
const output = getPrice(product1);
console.log(output); // 1000
// invalid Type Validation
const product2 = {name: "Laptop", price: "1000"};
const output2 = getPrice(product2);
console.log(output2); // Please provide valid price in product object