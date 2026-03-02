/*
TODO: Problem-32: প্রোফাইল সিঙ্গেল নাকি মেরিড , এই টাইপ এর  ডাটা চেঞ্জ করলে PUT না PATCH হবে ?

*/

// Create a new Promise to fetch data from a JSON file

const url = 'https://example.com/api/users/1';
const updatedProfile = {
    maritalStatus: 'Married'
};
const options = {
    method: 'PATCH',
    body: JSON.stringify(updatedProfile),
    headers: {  
        'Content-Type': 'application/json',
    },
};
fetch(url, options)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));