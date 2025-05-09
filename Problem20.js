/*
TODO: Problem-20: Write a program that checks, if the temperature is less than 0 degrees, it will say "Ice", if it is between 0 and 20, it will say "Cool Cool", and if it is more than 20, it will say "Hot Hot".
*/

//Solution: 

const temperature = 25; // Replace with your temperature value
if (temperature < 0) {
    console.log("Ice");
} else if (temperature >= 0 && temperature <= 20) {
    console.log("Cool Cool");
} else {
    console.log("Hot Hot");
}