/*
TODO: Gemini Challenge-2: Filtering Data with Promises.(Medium Gemnini Challenge 2)
TODO: একটি JSON লিস্ট থেকে শুধু সেইসব ব্যবহার কারিদের খুঁজে বের বের করুন  যাদের বয়স ১৮ এর বেশি এবং যারা active স্ট্যাটাস আছে টিপস : filter() মেথড ইউজ করতে পারো

*/

// Solution-2:

const userData = [
    {
        "id": 1,
        "name": 'John Doe',
        "age": 25,
        "status": 'active'
    },
    {
        "id": 2,
        "name": 'Jane Smith',
        "age": 17,
        "status": 'active'
    },
    {
        "id": 3,
        "name": 'Bob Johnson',
        "age": 30,
        "status": 'inactive'
    },
    { 
        "id": 4,
        "name": 'Alice Brown',
        "age": 22,
        "status": 'active'
    },
    {
        "id": 5,
        "name": 'Charlie Davis',    
        "age": 19,
        "status": 'inactive'
    }
];

// Filter users who are older than 18 and have an active status and string to number conversion for age if age is in string format

const filteredUsers = userData.filter(user => {
    const age = typeof user.age === 'string' ? parseInt(user.age, 18) : user.age;
    return age > 18 && user.status === 'active';
});

// Explanation:
// 1. We use the filter() method to iterate through each user in the userData array.
// 2. Inside the filter callback, we check if the user's age is greater than 18 and if their status is 'active'.
console.log(filteredUsers);