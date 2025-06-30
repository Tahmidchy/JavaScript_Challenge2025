/*
TODO: Problem-19: There is an object called Phone, const Phone = { Brand: "Samsung", Model: "Galaxy S21", Price: 85000 }; For this, run a for of loop using the object key and log each property and its value to the console.
*/

// Solution:
const phone = { Brand: "Samsung", Model: "Galaxy S21", Price: 85000 };
const keys = Object.keys(phone);
for (const key of keys) {
    console.log(`${key}: ${phone[key]}`); // Logs the key and value of the object
    // Example output: Brand: Samsung, Model: Galaxy S21, Price: 85000  
}