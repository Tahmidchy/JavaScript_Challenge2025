/* 
TODO:Problem-2: We know that 1 kilowatt hour is equal to 860 kilocalories. So write a function that will convert any kilowatt hour into kilocalories.
*/

// Solution: 

function kilowattHourToKilocalories(kilowattHour) {
    // 1 kilowatt hour = 860 kilocalories
    const kilocaloriesInKilowattHour = 860;
    return kilowattHour * kilocaloriesInKilowattHour;
}
// Test the function
console.log(kilowattHourToKilocalories(5));