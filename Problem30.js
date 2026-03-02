/*
TODO: Problem-30: একটা API কল লিখে ফেলো যেটা 'https ://jsonplaceholde। typicode .com/users ' থেকে users লিস্ট লোড করবে 
*/

// Solution-30: 

const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching users:', error));

