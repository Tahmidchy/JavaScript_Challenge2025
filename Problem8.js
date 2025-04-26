/*
TODO: Problem-8: Your younger brother is 10 years old, and you are 15 years old. Now write a program to check whether you and your younger brother are younger or the same age as you.
*/
//Solution:

let brother_age = 10;
let my_age = 15;
if (my_age > brother_age) {
    console.log("You are older than your brother");
} else if( my_age == brother_age) {
    console.log("You and your brother are of the same age");
}else {
    console.log("You are younger than your brother");
}