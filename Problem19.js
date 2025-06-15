/*
TODO: Problem-19: Your task will be to display as output all the numbers from 20 to 50 that are divisible by 7.
*/

// Solution: 

for (let i = 20; i <= 50; i++){
    if (i % 7 === 0) { // Check if the number is divisible by 7
        console.log(`The number ${i} is divisible by 7`);
    }
}