/*
TODO: Gemini challenge-1: JSON Parsing & Mapping Challenge (Basic) 
TODO: Question is : একটা JSON অবজেক্টে অনেকগুলো ব্যাবহারকারী ডেটা আছে ,আপনার কাজ হলো সেই JSON থেকে শুধু তাদের নামগুলো Name বের করে একটা নতুন এরে তৈরি করো TIPS: map() মেথড ইউজ করতে পারো
*/

const users = [
    {
        "id": 1,
        "name": 'Leanne Graham',
        "username": 'Bret',
        "email": 'leanne @example.com'},
        {
        "id": 2,
        "name": 'Ervin Howell',
        "username": 'Antonette',
        "email": 'ervin @example.com'},
        {
        "id": 3,
        "name": 'Clementine Bauch',
        "username": 'Samantha',
        "email": 'clementine @example.com'
        }
       
];

// Solution-1:

const names = users.map(users => users.name);
console.log(names);
