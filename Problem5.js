/*
TODO: Problem-4 : How many microseconds does SetTimeout() assume as default if the seconds parameter is omitted?
*/

// Answer: 
// If the seconds parameter is omitted in setTimeout(), it defaults to 0 milliseconds (0 microseconds).
// This means the function will be executed as soon as possible after the current call stack is cleared.
/*

explain in Bangla:
যদি setTimeout() ফাংশনে সেকেন্ড প্যারামিটারটি বাদ দেওয়া হয়, তাহলে এটি ডিফল্টভাবে 0 মিলিসেকেন্ড (0 মাইক্রোসেকেন্ড) এ সেট করা হয়। এর মানে হল যে ফাংশনটি যত তাড়াতাড়ি সম্ভব বর্তমান কল স্ট্যাক পরিষ্কার হওয়ার পরে কার্যকর করা হবে।
*/
