/*
TODO: Problem-1: You create an array that contains the numbers 71 to 79.
*/

// Solution: 

const numbersArray = Array.from({length: 9}, (_, i) => 71 + i);
console.log(numbersArray);

/*
Explanation:
Array.from() creates a new array from the provided object or iterable.

{ length: 9 } specifies the length of the array (9 elements for numbers 71 to 79 inclusive).

The second argument (_, i) => i + 71 is a mapping function:

i is the index (starting from 0).

Adding 71 to the index gives the desired numbers starting at 71.
*/