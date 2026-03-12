/*
TODO: Problem-45: Write an async function, and name it fetchUser , inside this function, load data from this url link 'https://jsonplaceholder.typicode.com/users/2' and log the data to the console, also, you must use try - catch
*/

// Solution:

async function fetchUser() {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users/2';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:',error);
    }
}
fetchUser();