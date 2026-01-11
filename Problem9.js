/*
TODO: Problem-9: Write a promise, when this promise is resolved, it will return an array, which will contain the names of many users, and if it is rejected, it will return that there is no user data.
*/

// Solution:

const fetchUserNames = new Promise((resolve,reject)=>{
    const hasUserData = true; // Change this to false to test rejection

    if(hasUserData){
        const userNames = ["Alice", "Bob", "Charlie", "David"];
        resolve(userNames);
    } else {
        reject("No user data available.");
    }
});

fetchUserNames.then((names)=>{
    console.log("User Names:", names);
})
.catch((error)=>{
    console.log("Error:", error);
});

