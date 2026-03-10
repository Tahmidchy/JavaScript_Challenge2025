/*
TODO: Problem-47: 'https://jsonplaceholder.typicode.com/posts?userId=1'Load all his posts from , do it in two ways, the first time in callback hell style and the second time with async -await.
*/

// Solution -1: 

function loadPostsWithCallback(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) { // ৪ মানে কাজ শেষ
      if (xhr.status === 200) {
        // ডেটা সফলভাবে আসলে ক্যালব্যাক ফাংশন কল হবে
        callback(null, JSON.parse(xhr.responseText));
      } else {
        // ভুল হলে এরর পাঠানো হবে
        callback("Error: Could not fetch data", null);
      }
    }
  };
  xhr.send();
}

// ফাংশন কল করা (এখানেই 'হেল' শুরু হয় যদি আরও রিকোয়েস্ট থাকতো)
loadPostsWithCallback('https://jsonplaceholder.typicode.com/posts?userId=1', (err, posts) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Callback Style Data:", posts);
    // যদি এখন এই পোস্টের আইডি দিয়ে কমেন্ট আনতে চাইতেন, তবে আরও ভেতরে নেস্টিং করতে হতো
  }
});
