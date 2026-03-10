/*
TODO: Problem-50: Async-await দিয়ে এমন একটা ফাংশন লিখো , যেটা ব্যবহার ID প্যারামিটার হিসাবে নিবে , তারপর 'https://jsonplaceholder.typicode.com/users/ID ' থেকে সেই ব্যবহারের ডাটা লোড করবে , ব্যবহার এর মধ্যে লাস্টে টেম্পলেট স্ট্রিং দিয়ে প্যারামিটার হিসাবে যেই ID দিবি, সেটা ডায়নামিক ভাবে বসিয়ে দিবি কোনো এরর হলে সেটা কে try -catch দিয়ে হ্যান্ডেল করবি 

*/

// Solution: 

/**
 * নির্দিষ্ট ইউজার আইডি অনুযায়ী ডেটা ফেচ করার ফাংশন
 * @param {number|string} userId - যে ইউজারের ডেটা প্রয়োজন তার আইডি
 */
async function getUserData(userId) {
  try {
    console.log(`Fetching data for User ID: ${userId}...`);

    // টেম্পলেট স্ট্রিং (${}) ব্যবহার করে ডাইনামিক ইউআরএল তৈরি করা
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    
    // রিকোয়েস্ট পাঠানো এবং উত্তরের জন্য অপেক্ষা করা
    const response = await fetch(url);

    // যদি রেসপন্স ঠিক না থাকে (যেমন: আইডি খুঁজে পাওয়া যায়নি)
    if (!response.ok) {
      throw new Error(`User not found! Status: ${response.status}`);
    }

    // ডেটা JSON এ রূপান্তর করা
    const userData = await response.json();

    console.log("User Data Loaded Successfully:", userData);
    return userData;

  } catch (error) {
    // যেকোনো এরর (নেটওয়ার্ক বা ভুল আইডি) এখানে ধরা পড়বে
    console.error("Error occurred while fetching user data:", error.message);
  } finally {
    console.log("Operation finished.");
  }
}

// ফাংশনটি কল করার উদাহরণ
getUserData(1); // আইডি ১ এর জন্য
getUserData(5); // আইডি ৫ এর জন্য