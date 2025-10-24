/*
TODO: Example-18: Now we are testing on Type correction == vs ===.
*/
// Solution-18: Type correction == vs ===

let a = 5;
let b = '5';
console.log(a == b);  // true, because it converts b to number before comparison
console.log(a === b); // false, because it checks both value and type without conversion 

// Solution-18: Type correction == vs === with different types

let x = 0;
let y = false;
console.log(x == y);  // true, because it converts y to number before comparison
console.log(x === y); // false, because it checks both value and type without conversion

// Solution-18: Type correction == vs === with null and undefined

let m = null;
let n = undefined;
console.log(m == n);  // true, because both are considered equal in non-strict comparison
console.log(m === n); // false, because they are of different types

// Solution-18: Type correction == vs === with objects
let obj1 = { key: 'value' };
let obj2 = { key: 'value' };
console.log(obj1 == obj2);
console.log(obj1 === obj2); // both false, because they are different object references
console.log(obj1.key == obj2.key);  // true, because the values are the same
console.log(obj1.key === obj2.key); // true, because the values are the same and of the same type

// Solution-18: Type correction == vs === with arrays
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 == arr2);
console.log(arr1 === arr2); // both false, because they are different array references
console.log(arr1[0] == arr2[0]);  // true, because the values are the same
console.log(arr1[0] === arr2[0]); // true, because the values are the same and of the same type 

// Solution-18: Type correction == vs === with mixed types
let p = '0';
let q = 0;
console.log(p == q);  // true, because it converts p to number before comparison
console.log(p === q); // false, because they are of different types
console.log(p == false);  // true, because it converts p to number before comparison
console.log(p === false); // false, because they are of different types
console.log(q == false);  // true, because it converts q to number before comparison
console.log(q === false); // false, because they are of different types
console.log(p == null);  // false, because null is only equal to undefined in non-strict comparison
console.log(p === null); // false, because they are of different types
console.log(q == null);  // false, because null is only equal to undefined in non-strict comparison
console.log(q === null); // false, because they are of different types
console.log(p == undefined);  // false, because undefined is only equal to null in non-strict comparison
console.log(p === undefined); // false, because they are of different types
console.log(q == undefined);  // false, because undefined is only equal to null in non-strict comparison
console.log(q === undefined); // false, because they are of different types

// Solution-18: Type correction == vs === with NaN
let r = NaN;
console.log(r == r);  // false, because NaN is not equal to anything, including itself
console.log(r === r); // false, because NaN is not equal to anything, including itself

// Solution-18: Type correction == vs === with boolean and string
let s = true;
let t = 'true';
console.log(s == t);  // false, because it converts t to number before comparison
console.log(s === t); // false, because they are of different types
console.log(s == '1');  // true, because it converts '1' to number before comparison
console.log(s === '1'); // false, because they are of different types
console.log(t == '1');  // false, because it converts t to number before comparison
console.log(t === '1'); // false, because they are of different types
console.log(s == 1);  // true, because it converts s to number before comparison
console.log(s === 1); // false, because they are of different types
console.log(t == 1);  // false, because it converts t to number before comparison
console.log(t === 1); // false, because they are of different types

// Solution-18: Type correction == vs === with empty string and zero
let u = '';
let v = 0;
console.log(u == v);  // true, because it converts u to number before comparison
console.log(u === v); // false, because they are of different types
console.log(u == false);  // true, because it converts u to number before comparison
console.log(u === false); // false, because they are of different types
console.log(v == false);  // true, because it converts v to number before comparison
console.log(v === false); // false, because they are of different types 