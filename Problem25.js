/*
TODO: Problem-25: You will check if there is food in the fridge at home, if there is, heat the food, and if there is not, then check if the food delivery service is active, if it is active, you will order food, and if it is not active, you will go to bed without eating.
*/

//Solution: 

// Define the current states
const hasFoodInFridge = false;
const isDeliveryActive = true;

// Check conditions and perform actions accordingly
if (hasFoodInFridge) {
  console.log("Food is available in the fridge. Heating the food...");
} else if (isDeliveryActive) {
  console.log("No food in the fridge. Food delivery is active. Ordering food...");
} else {
  console.log("No food available and delivery is not active. Going to bed without eating.");
}

