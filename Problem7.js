/*
TODO: Problem-7: Separate the name and city from the person object. If there is no phone, set the default value N/A , const person ={ name:"Rahim",city:"Dhaka"} 
*/

// Solution:

const person = { name: "Rahim", city: "Dhaka" };
const { name, city, phone = "N/A" } = person;
console.log(name); // Output: Rahim
console.log(city); // Output: Dhaka
console.log(phone); // Output: N/A