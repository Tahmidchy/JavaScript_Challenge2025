/*
TODO: Problem-10: const project = { id: 101,title:"Web App",budget:3000,client:"Tech Corp" };Here, except for the title, keep all the properties in a separate object.
*/

// Solution: 
const project = {
    id: 101,
    title: "Web App",
    budget: 3000,
    client: "Tech Corp"
};
const{title, ...otherDetails} = project;
console.log(title); // Output: Web App
console.log(otherDetails); // Output: { id: 101, budget: 3000