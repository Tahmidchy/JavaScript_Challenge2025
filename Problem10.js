/*
TODO: Problem - 10: Suppose you consume 4 kg of rice each day. You have 12 maunds of rice, which is equivalent to 480 kg. How many days will your 12 maunds of rice last? Additionally, considering that 1 month is equal to 30 days, how many months will the 12 maunds of rice last you?
 */

// Solution:

let totalRice = 480; // in kg
let dailyConsumption = 4; // in kg
let daysInMonth = 30; // number of days in Month

// calculate the number of days the rice will last

let daysRiceWillLast = totalRice / dailyConsumption;

// calculate the number of months the rice will last

let monthsRiceWillLast = daysRiceWillLast / daysInMonth;

console.log(`Your 12 maunds of rice will last ${daysRiceWillLast} days.`);
console.log(`That is approximately ${monthsRiceWillLast.toFixed(2)} months.`);