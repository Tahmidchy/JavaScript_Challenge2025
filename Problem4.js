/*
TODO: Problem-4: Create a weather object that contains city, temperature, humidity and forecast (array), forecast array contains at least 7 days of possible temperatures, convert it to zone
*/

// Solution: 

const weather = {
    city: 'San Francisco',
    temperature: 68,
    humidity: 75,
    forecast: [70, 72, 68, 65, 74, 73, 71]
};
const weatherJSON = JSON.stringify(weather);
console.log(weatherJSON);   
