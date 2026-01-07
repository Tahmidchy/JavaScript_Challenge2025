/*
TODO: Problem-2 : Create an object, where there will be a user, the user will have name, email, address, and an order history, that order history will have at least three products, convert the entire object to a JSON string using JSON.stringify() method.
*/

// Solution:

const user= {
    name: 'Tahmid',
    email: 'tahmidchy@hotmail.com',
    address: {
        street: 'Lakeview',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    orderHistory: ['laptop', 'headphones', 'keyboard'],
};
const userJSON = JSON.stringify(user);
console.log(userJSON);