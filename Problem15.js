/*
TODO: Problem-15: You have opened your own shop. If someone purchases more than 3000 thousand taka in your shop, you get a 5% discount, and if more than 6000 thousand taka, you get a 15% discount. Now, if your friend buys a product worth 4500 taka, how much discount will you give him? Solve this Monday by programming.
*/
// Solution: 

const price = 4500;
if(price > 6000){
    const discount = price * 0.15;
    const pay = price - discount;
    console.log(`You will get 15% discount. So, you have to pay ${pay} taka.`);
} else if(price > 3000){
    const discount = price * 0.05;
    const pay = price - discount;
    console.log(`You will get 5% discount. So, you have to pay ${pay} taka.`);
} else{
    console.log('Sorry !! Sir No discount for you.');
}