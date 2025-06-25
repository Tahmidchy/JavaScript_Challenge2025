/*
TODO: Problem-3: You create an object called Cat and put information about the cat in that object.
*/

// Solution: 
const cat = {
    name: 'Whiskers',
    breed: 'Siamese',
    age: 3,
    color: 'Cream',
    weight: '10 lbs',
    isIndoor: true,
    favoriteFood: ['Tuna', 'Chicken'],
    ownerName: 'Alice',
    playTime: function() {
        console.log(`${this.name} loves to play with yarn!`);
    }
};
console.log(cat);