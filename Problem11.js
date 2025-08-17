/*
TODO: Problem-11: const programmer = { name: "Sophia", language: "JavaScript", experience: 5, company: "Tech Solutions" , specialty: "Frontend", tools: "React"}; Here, we will keep the language and specialty as separate properties and keep the rest in the details object.
*/

// Solution: 

const programmer = { name: "Sophia", language: "JavaScript", experience: 5, company: "Tech Solutions", specialty: "Frontend", tools: "React" };

const { language, specialty, ...details } = programmer;
console.log(language); // Output: JavaScript
console.log(specialty); // Output: Frontend
console.log(details); // Output: { id: 101, budget: 3000, client: 'Tech Corp' }, client: "Tech Corp" }, company: "Tech Solutions", tools: "React" }, experience: 5 }