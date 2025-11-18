/*
TODO: Problem-1 : What happens after calling a function in synchronous code?
*/

// Answer: In synchronous code, when a function is called, the execution of the current function is paused until the called function completes its execution. Once the called function finishes, control returns to the point where the function was called, and execution continues from there.

// Answer With Bangla: সিঙ্ক্রোনাস কোডে, যখন একটি ফাংশন কল করা হয়, তখন বর্তমান ফাংশনের এক্সিকিউশন থামানো হয় যতক্ষণ না কল করা ফাংশনটি তার এক্সিকিউশন সম্পূর্ণ করে। কল করা ফাংশনটি শেষ হয়ে গেলে, কন্ট্রোল সেই বিন্দুতে ফিরে আসে যেখানে ফাংশনটি কল করা হয়েছিল এবং সেখান থেকে এক্সিকিউশন চলতে থাকে।
// Example Code Demonstration:
console.log('Start'); // Synchronous
greet(); // Synchronous function call
console.log('End'); // Synchronous
function greet() {
    console.log('Hello, World!'); // Synchronous
}
// Output:
// Start
// Hello, World!
// End

/*
TODO: Problem-2: Is JavaScript single threaded?
*/

// Answer: Yes, JavaScript is single-threaded. It means that JavaScript has a single call stack and can execute one piece of code at a time. However, it can handle asynchronous operations using mechanisms like callbacks, promises, and async/await, which allow non-blocking behavior despite being single-threaded.

// Answer With Bangla: হ্যাঁ, জাভাস্ক্রিপ্ট সিঙ্গল-থ্রেডেড। এর মানে জাভাস্ক্রিপ্টের একটি একক কল স্ট্যাক রয়েছে এবং এটি এক সময়ে একটি কোডের টুকরা এক্সিকিউট করতে পারে। তবে, এটি কলব্যাক, প্রমিস, এবং অ্যাসিঙ্ক/অ্যাওয়েটের মতো মেকানিজম ব্যবহার করে অ্যাসিঙ্ক্রোনাস অপারেশনগুলি পরিচালনা করতে পারে, যা সিঙ্গল-থ্রেডেড হওয়া সত্ত্বেও নন-ব্লকিং আচরণকে অনুমতি দেয়।