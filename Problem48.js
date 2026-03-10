/*
TODO: Problem-48: TODO: Problem-47: 'https://jsonplaceholder.typicode.com/posts?userId=1'Load all his posts from , do it in two ways, the first time in callback style and the second time with async -await.

In here second solution here.
*/

// Solution: 


async function loadPostsWithAsync(url) {
  try {
    console.log("Fetching posts...");
    
    // fetch() একটি প্রমিস রিটার্ন করে, await দিয়ে সেটির জন্য অপেক্ষা করা হয়
    const response = await fetch(url);
    
    // রেসপন্সটি JSON এ রূপান্তর করার জন্য অপেক্ষা করা
    const data = await response.json();
    
    console.log("Async-Await Style Data:", data);
  } catch (error) {
    // যেকোনো নেটওয়ার্ক বা কোড এরর এখানে ধরা পড়বে
    console.error("Invalid format or network error");
  } finally {
    console.log("Fetch attempt finished");
  }
}

// ফাংশন কল করা
loadPostsWithAsync('https://jsonplaceholder.typicode.com/posts?userId=1');