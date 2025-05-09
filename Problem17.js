/*
TODO: Problem-17: If someone's bank account balance is less than 1000 taka, then it will say "Deposit money". If the bank account balance is between 1000 and 5000 taka, then it will say "Enjoy your life", and if it is more than 5000 taka, then it will say "Marry me, you are a great man".
*/

const balance = 10000;
if (balance <= 1000) {
    console.log("Deposit money");
} else if (balance <= 5000) {
    console.log("Enjoy your life");
} else {
    console.log("Marry me, you are a Rich man");
}