/*
TODO: Problem-5: Destructuring the first and last elements of the array and place them in variables named two and eight. const digits = [2,4,6,8].
*/
const digits = [2, 4, 6, 8];
const [two, , , eight] = digits;
console.log(two); // Output: 2
console.log(eight); // Output: 8