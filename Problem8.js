/*
TODO: Problem-8: Extract the name and profession values from the Teacher object, keeping Job as the alias for the profession.const teacher ={ name:"Maria", profession:"Teacher"} 

*/

// Solution:

const teacher = { name: "Maria", profession: "Teacher" };
const { name, profession: Job } = teacher;
console.log(name); // Output: Maria
console.log(Job); // Output: Teacher