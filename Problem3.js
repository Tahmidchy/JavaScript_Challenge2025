/* 
TODO: Problem 3: You have 60 taka. You spend 15 taka each time. How many times can you spend that 60 taka, and how much money will you have left after the last expenditure?
 */

//Solution:

let money = 60; // Total Money
let expense = 15; // Expense per time

let spendTime = Math.floor(money / expense); // Calculate how many times you can spend the money
let remainingMoney = money % expense; // Calculate the remaining money after the last expenditure

console.log(`you can spend ${spendTime} times`);
console.log(`you will have ${remainingMoney} taka left after the last expenditure`);


