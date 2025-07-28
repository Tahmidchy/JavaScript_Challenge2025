/*
TODO: Problem-11: Calculate the cost of delivering a package. Where if it is less than 10 kg, it is 100 taka. If it is less than 20 kg, it is 300 taka. If it is less than 50 kg, it is 1000 taka and if it is more than 50 kg, it is 100 taka for each kg.
*/

// Solution: 

function calculateDeliveryCost(weight){
    if (weight < 10) {
        return 100;
    } else if (weight < 20) {
        return 300;
    } else if (weight < 50) {
        return 1000;
    } else {
        return weight * 100; // 100 taka for each kg
    }
};
// Test the function
console.log(calculateDeliveryCost(5)+ "tk");   // Output: 100
console.log(calculateDeliveryCost(15) + "tk");  // Output: 300 
console.log(calculateDeliveryCost(30) + "tk");  // Output: 1000
console.log(calculateDeliveryCost(60) + "tk");  // Output: 6000
console.log(calculateDeliveryCost(10) + "tk");  // Output: 100
console.log(calculateDeliveryCost(20) + "tk");  // Output: 300
console.log(calculateDeliveryCost(50) + "tk");  // Output: 1000
console.log(calculateDeliveryCost(70) + "tk");  // Output: 7000
console.log(calculateDeliveryCost(0));   // Output: 100 (assuming 0 kg is treated as < 10 kg)
console.log(calculateDeliveryCost(9.5)); // Output: 100 (testing with a decimal value)
console.log(calculateDeliveryCost(19.9)); // Output: 300 (testing with a decimal value)
console.log(calculateDeliveryCost(49.9)); // Output: 1000 (testing with a decimal value)
console.log(calculateDeliveryCost(50.1)); // Output: 5010 (testing with a decimal value above 50 kg)
console.log(calculateDeliveryCost(100)); // Output: 10000 (testing with a very high weight)
console.log(calculateDeliveryCost(200)); // Output: 20000 (testing with a very high weight)
console.log(calculateDeliveryCost(150)); // Output: 15000 (testing with a very high weight)
console.log(calculateDeliveryCost(75));  // Output: 7500 (testing with a high weight)
console.log(calculateDeliveryCost(25));  // Output: 1000 (testing with a mid-range weight)
console.log(calculateDeliveryCost(35));  // Output: 1000 (testing with a mid-range weight)
console.log(calculateDeliveryCost(45));  // Output: 1000 (testing with a mid-range weight)
console.log(calculateDeliveryCost(55));  // Output: 5500 (testing with   a high weight)
console.log(calculateDeliveryCost(80));  // Output: 8000 (testing with a high weight)   