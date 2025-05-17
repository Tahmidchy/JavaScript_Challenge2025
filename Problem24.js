/*
TODO: Problem-24: You have created a program that checks if there is an element called rain. If it is there, the output will be "I need an umbrella." If not, the output will be "It is raining, so I need an umbrella." The elements that will be in this array are - [ "Dighi", "Megh", "Brushti", and "Barsha"]
*/

// Solution: 

let weather = ["Dighi", "Megh", "Rain", "Barsha"]; 
// Array of weather 
if(weather.includes("Rain")){
    console.log("I need an umbrella."); // If "Rain" is in the array, log this message
} else{
    console.log("No rain, no umbrella needed."); // If "Rain" is not in the array, log this message
}