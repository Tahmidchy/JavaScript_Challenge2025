/*
TODO: Problem-3: Create a shopping cart object, which will contain products (array of products), total price (total price of all products), and user details (name, id, contact), then convert it to a JSON string.
*/

// Solution:
const shoppingCart = {
    products: [
        { id: 1, name: 'Laptop', price: 1000 }, 
        { id: 2, name: 'Mobile', price: 500 }, 
        { id: 3, name: 'Headphones', price: 150 }
    ],
    totalPrice: 1650,
    userDetails: {
        name: 'John Doe',
        id: 'U12345',
        contact: '222222-3333333'
    }
};
const shoppingCartJSON = JSON.stringify(shoppingCart);
console.log(shoppingCartJSON);
