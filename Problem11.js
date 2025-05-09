/*
TODO: Problem-11: If you have more than 12 eggs in your fridge or don't have a chicken, then you should cook egg korma or eat bread and bananas.
*/

//Solution: 

const eggs = 9;
const hasChicken = false;

if(eggs > 12 ||  hasChicken) {
    console.log("Cook egg korma");
} else if( eggs <= 12 && hasChicken) {
    console.log("Cook chicken Korma");
}else{
    console.log("Eat bread and bananas");
}