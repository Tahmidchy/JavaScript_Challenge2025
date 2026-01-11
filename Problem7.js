/*
TODO: Problem-7: Create some data for courses for the learning platform, where there will be minimum 3 courses, each course will have course title, instructors name, duration and lesson array, lesson array will have lesson name, duration and difficulty level, difficulty level will be any one of beginner, intermediate, advanced, convert it with JSON .stringify
*/

// Solution: 

const learningPlatform = {
    course : [
        {
            courseTitle: 'JavaScript Basics',
            instructorName: 'John Doe',
            duration: '4 weeks',
            lessons: ['Variables and Data Types', 'Functions and Scope', 'DOM Manipulation'],
        },
        {
            courseTitle: 'Advanced Python',
            instructorName: 'Jane Smith',
            duration: '6 weeks',
            lessons: ['Decorators and Generators', 'Concurrency', 'Web Development with Django'],
        }

    ]
}
const learningPlatformJSON = JSON.stringify(learningPlatform);
console.log(learningPlatformJSON);