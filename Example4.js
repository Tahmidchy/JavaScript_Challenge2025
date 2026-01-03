/*
TODO: Today's we are testing on another example with promises.
*/

// Solution: 

const getUsers = new Promise((resolve, reject) => {
    const usersFetched = true;

    if (usersFetched) {
        resolve("Users have been successfully fetched!");
    }
    else {
        reject("Failed to fetch users.");
    }
});

getUsers.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});
