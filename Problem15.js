/*
TODO: Problem-14: Create a family object in which one property will be Father and its value will be another object and Father will have Father's name, age and profession, similarly there will be a property called Mother and that property and an object inside it will have Mother's name, age and profession, now your job is to find Mother's age property along with your Father's age property. Then find the sum of those two ages and show it as output.
*/

// Solution:

const family = {
    Father: {
        name: 'John',
        age: 45,
        profession: 'Engineer',
    },
    Mother: {
        name: 'Emma',
        age: 42,
        profession: 'Teacher',
    },
};
const fatherAge = family.Father.age;
const motherAge = family.Mother.age;
const sumOfAges = fatherAge + motherAge;
console.log(`Father and Mother age sum is : ${sumOfAges}`);