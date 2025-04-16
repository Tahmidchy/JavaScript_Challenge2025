/*
TODO: You have 500 taka. If you spend 75 taka each time, how many times can you spend from the 500 taka and how much money will you have left at the end?
 */

//Solution:

let money = 500; // Total Money
let spend = 75; // Expense per time

let spendTime = Math.floor(money / spend); // Calculated how many times you can spend money
let remainingMoney = money % spend; // remainingMoney is the money left after spending the money as many times as possible

console.log(`you can spend money ${spendTime} times`);
console.log(`you have ${remainingMoney} taka left`);
