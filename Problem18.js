/*
TODO: Problem-18: Write a function where you find the average of the odd numbers in an array. (this problem by book example but in here i am some modification used my previous programming knowledge and case study.)
*/

// Solution: 

function oddAverage(numbers) {
    const odds = [];
    for(const number of numbers) {
        if (number % 2 === 1 || number % 2 !== 0) { // Check if the number is odd using or operator if the number is not even then it is odd  
            odds.push(number);
        }
    }
    if (odds.length  === 0) {
        return 0; // Return 0 if there are no odd numbers   
    }
    let sum = 0;
    for(const number of odds) { // Calculate the sum of the odd numbers
        sum += number;
    }
    const average = sum / odds.length; // Calculate the average of the odd numbers
    return average;
};
// Test cases
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [2, 4, 6, 8];
const average1 = oddAverage(numbers1); // 3
const average2 = oddAverage(numbers2); // 0
console.log("Average of odd numbers in [1, 2, 3, 4, 5]:", average1);
console.log("Average of odd numbers in [2, 4, 6, 8]:", average2);