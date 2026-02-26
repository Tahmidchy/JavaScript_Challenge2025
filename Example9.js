/*
TODO: Now we are testing on the JSON Create/Post API for Promises.
*/

const url = 'https://jsonface.com/api/examples/promise';
const user = {name: 'John Doe',email:'john.doe@example.com'}
const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json'
    },
}
fetch(url, options)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));