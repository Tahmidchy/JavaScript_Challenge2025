/*
TODO: Example-5: Create a promise new example here.
*/

// Solution:

const getUsers = new Promise((resolve, reject) => {
    const usersAvailable = true;
    const users = ["john", "jane", "doe"];

    if (usersAvailable) {
        resolve(users);
    }
    else {
        reject("No users available.");
    }
});

getUsers.then((users) => {
    console.log("Users:", users);
}).catch((error) => {
    console.log(error);
});