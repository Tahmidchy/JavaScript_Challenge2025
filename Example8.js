/*
TODO: We are testing on the JSON Face API for Promises.
*/

const url = 'https://jsonface.com/api/examples/promise';

fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error fetching data:', error));