/*
TODO: Program-12: If a person has a body temperature of over 100 degrees or has a cough, they will go to the doctor. Otherwise, they will lie down with their back twisted. Write a program for this.
*/

//Solution: 

let bodyTemperature = 100;
let hasCough = true;

if(bodyTemperature > 100 || hasCough) {
    console.log("Go to the doctor");
} else{
    console.log("Lie down with your back twisted");
}