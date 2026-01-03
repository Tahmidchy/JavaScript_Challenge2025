/*
TODO: Example-2: Now we are testing the JSON data converting to javascript string object.
*/

// Solution:

const shop = {
    owner: 'Alia',
    address: {
        street: 'Kumarpara',
        city: 'Kushtia',
        country: 'Bangladesh'
    },
    products: ['laptop', 'mobile', 'watch'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);