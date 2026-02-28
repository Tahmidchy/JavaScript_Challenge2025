/*
TODO: Gemini Challenge-3: Fetching & Error Handling (Google level preparation)
TODO: একটি ফেক API ( যেমন : ) থেকে ডেটা ফেচ (fetch ) করুন , যদি ডেটা আসতে দেরি হয় , বা এরর  আসে , তবে তা কিভাবে হ্যান্ডেল করবেন ?
TODO:Tips: fetch() মেথড ইউজ করতে পারো , এবং error handling এর জন্য catch() মেথড ইউজ করতে পারো
*/

// Solution-3:

const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));
    