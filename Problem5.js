/*
TODO: Problem-5: Create an array that contains the odd numbers between 11 and 30.
*/

// Solution: 

const oddNumbers = [];
for (let i = 11; i <= 30; i++) {
    if (i % 2 !== 0) oddNumbers.push(i);
}
console.log(oddNumbers);