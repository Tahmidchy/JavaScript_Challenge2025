/*
TODO: Example-4: Now we are testing Non-Primitive Reference type testing.
*/

// Example-4: Non-Primitive Reference Types

let dev = {role: "Developer"};
let dev2 = dev; // Copying the reference of dev to dev2
console.log(dev, dev2); // Output: { role: 'Developer' } { role: 'Developer' }
dev2.role = "FullStack"; // Modifying the role property of dev2
console.log(dev, dev2); // Output: { role: 'FullStack' } { role: 'FullStack' }

// Both dev and dev2 reflect the change because they reference the same object