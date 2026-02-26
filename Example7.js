// Now we are testing on Fetch().json with promise

fetch('https://jsonface.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching JSON:', error));