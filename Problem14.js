/*
TODO: Problem-14: If the price of the shirt is more than 1000 taka and you have a coupon, you will be given a 20% discount. If none of the above conditions are met, you will have to pay the price written on the product.
*/

// Solution: 

let price = 1200;
let coupon = true;
if (price > 1000 && coupon == true) {
    const discount = price * 0.2;
    const finalPrice = price - discount;
    console.log("Sir , your final price is: ", finalPrice);
} else{
    console.log("You will have to pay the price written on the product.");
}