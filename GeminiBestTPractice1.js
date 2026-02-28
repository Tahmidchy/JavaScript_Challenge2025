/*
TODO: Gemini challenge-1: JSON Parsing & Mapping Challenge (Basic) 
TODO: Question is : একটা JSON অবজেক্টে অনেকগুলো ব্যাবহারকারী ডেটা আছে ,আপনার কাজ হলো সেই JSON থেকে শুধু তাদের নামগুলো Name বের করে একটা নতুন এরে তৈরি করো TIPS: map() মেথড ইউজ করতে পারো . Gemini Best practice বলেছে আমি এখন সেটা করবো প্রফেশনাল কোড 
*/

// Solution-1: 

const users = [
    {
        "id": 1,
        "name": 'Leanne Graham',
        "username": 'Bret',
        "email": 'leanne @example.com'
    },
    {
        "id": 2,
        "name": 'Ervin Howell',
        "username": 'Antonette',
        "email": 'ervin @example.com'
    },
    {
        "id": 3,
        "name": 'Clementine Bauch',
        "username": 'Samantha',
        "email": 'clementine @example.com'
    }

];

//Professional Method:

const names = users?.map(user => user?.name || 'Unknown Name');
// Explanation:
// 1. We use optional chaining (?.) to safely access the 'map' method on the 'users' array. This prevents errors if 'users' is null or undefined.
// 2. Inside the map function, we again use optional chaining to access the 'name' property of each user object. If a user object is missing or doesn't have a 'name' property, it will return 'Unknown Name' instead of throwing an error.
// 3. Finally, we log the resulting array of names to the console.
console.log(names);