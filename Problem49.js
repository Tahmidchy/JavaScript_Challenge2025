/*
TODO: Problem-49: async-await দিয়ে একটা ফাংশন লিখো যা 'https://jsonplaceholder.typicode.com/comments' থেকে কমেন্টস লোড করবে , মাস্ট be try catch finally ব্যবহার করতে হবে , এবং finally তে একটা কনসোল.লগ দিয়ে 'রিকোয়েস্ট completed!'

*/

// Solution:

async function fetchData() {
    try {
        console.log('Fetching post loading ...!');
            // fetch() একটি প্রমিস রিটার্ন করে, await দিয়ে সেটির জন্য অপেক্ষা করা হয়
            const response = await fetch(url);
            // রেসপন্সটি JSON এ রূপান্তর করার জন্য অপেক্ষা করা
            const data = await response.json();
            console.log("Async-Await Style Data:", data);
    } catch (error) {
        console.error ('Invalid formate or Network Error');
    } finally {
        console.log('Request Completed!');
    }
}

//ফাংশন কল করা
fetchData('https://jsonplaceholder.typicode.com/comments');
