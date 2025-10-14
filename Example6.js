/*
TODO: Example-6: we are testing non-primitive pass by reference with re-assign.
*/

// Example-6: Non-Primitive Types with Re-assignment

function updateJob(person) {
    person.job = "Designer"; // Modifying the job property of the object
    console.log("Inside function:", person); // Output: Inside function: { job: 'Designer' }
}
let employee = {job: "Developer"};
console.log("Before function call:", employee); // Output: Before function call: { job: 'Developer' }
updateJob(employee);
console.log("After function call:", employee); // Output: After function call: { job: 'Designer' }
// employee is modified because objects are passed by reference and we changed a property of the object