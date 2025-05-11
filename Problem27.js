/*
TODO: Problem-27: You have your own shop. If someone purchases more than 3000 taka in your shop, you give them 500 taka cashback. If it is less than this, some cashback is 0 taka. Write this topic in one line. The name of the variable will be cashback, and the man will be set using the ternary operator.
*/

// Solution: 

const shopping_price = 2000;
const cashback = shopping_price >=3000 ? console.log("Congratulations! You get 500 tk cashback") : console.log("Sorry you can't any cash back");