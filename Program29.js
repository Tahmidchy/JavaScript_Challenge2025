/*
TODO: Problem-29: Write a program using a ternary operator that, if isLoggedIn is true,then it will display the "welcome back "message. If it is false, then it will display the message" Please log in".
*/

//Solution: 

const Log_in_status = true;
const isLoggedIn = Log_in_status === true ? console.log("Welcome Back!") : console.log("Please Log In");