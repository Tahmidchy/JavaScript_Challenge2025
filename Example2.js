// In here Javascript destructuring is used for changed new property names and default values.

// Solution 2:

const actor = {
    name: 'Tom Cruise',
    age: 60,
    money: 50000000,
}

const {name, age: boyos, Money, phone} = actor;
//result
console.log(name);
console.log(boyos);
console.log(Money); // Output: undefined, as Money is not defined in the actor object