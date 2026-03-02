/*
TODO: Problem-31: fetch প্রাকটিস করে ফেল ' https: // jsonplaceholder.typicode.com/users/1' এই ইউআরএল থেকে ডাটা লোড করার জন্য 
*/

// Solution-31: 

const url = 'https://jsonplaceholder.typicode.com/users/1';
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching user:', error));