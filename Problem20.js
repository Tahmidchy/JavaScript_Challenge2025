/*
TODO: Problem-20: Just a program write where you just swap the values of two variables  using a third variable.
*/

// Solution: 

let a = 5;
let b = 10;
// Swapping values without using a third variable
console.log("Before swapping: a =", a, ", b =", b);
let temp = a; // Store the value of a in a temporary variable
a = b; // Assign the value of b to a 
b = temp; // Assign the value of the temporary variable to b
console.log("After swapping: a =", a, ", b =", b);