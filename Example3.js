/*
TODO: Example-3: Today we will do an example test with promises.
*/

// Solution:

const orderFood = new Promise((resolve,reject)=>{
    const foodReady = true;

    if(foodReady){
        resolve("Food is ready to be served!");
    } else {
        reject("Food is not ready yet.");
    }
});
orderFood.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});
