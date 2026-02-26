/*
TODO: Example-6: Now we are testing on promise.all() method.
*/

// Solution:

const moneyRequest = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("Request submitted!"),1000);
});
const transferMoney = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("Money transferred!"),2000);
});
const payFee = new Promise((resolve,reject)=> {
    setTimeout(()=> resolve("Fee paid!"),1500);
});
Promise.all([moneyRequest, transferMoney, payFee])
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});