/*
TODO: Now We are going to testing on Event loop in JavaScript.
*/

// Example 5: Understanding Event Loop with setTimeout and Promises

console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
},5000);

setTimeout(() => {
    console.log('Timeout 2');
},500);
console.log('End');

/*
explain in Bangla:
এই উদাহরণে, আমরা দেখতে পাচ্ছি যে 'Start' এবং 'End' প্রথমে কনসোলে প্রিন্ট হবে কারণ তারা সিঙ্ক্রোনাস কোড। তারপর, 'Timeout 2' প্রিন্ট হবে কারণ এটি 500 মিলিসেকেন্ড পরে সেট করা হয়েছে, যা 'Timeout 1' এর চেয়ে কম সময়। অবশেষে, 'Timeout 1' প্রিন্ট হবে কারণ এটি 5000 মিলিসেকেন্ড পরে সেট করা হয়েছে। এই উদাহরণটি ইভেন্ট লুপের কাজ করার পদ্ধতি প্রদর্শন করে যেখানে অ্যাসিঙ্ক্রোনাস কলগুলি তাদের নির্ধারিত সময় অনুযায়ী কার্যকর হয়।
*/