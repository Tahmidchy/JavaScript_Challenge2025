/*
TODO: Problem-10: Two variables are taken, namely apple and orange. Of these two variables, the value of one is 200 taka and the value of the other is 300 taka. Now find out through programming whether the price of an apple and an orange is equal or higher?
*/

//Solution: 

let apple_price = 200;
let orange_price = 300;
if (apple_price >= orange_price) {
    console.log("The price of an apple is equal to or higher than an orange");
}else if (orange_price >= apple_price) {
    console.log("The price of an orange is equal to or higher than an apple");
}else{
    console.log("The price of an apple and an orange is not equal");
}

//Solution 2

console.log(apple_price > orange_price);
console.log(apple_price < orange_price);
