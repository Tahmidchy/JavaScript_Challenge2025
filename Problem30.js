/*
TODO: Problem-30: Const Food = {Name: Pizza, Price: 500, Size: Large}, something where new properties cannot be added to Food, but the price can be increased or decreased if desired.
*/

// Solution:

const Food = {
    Name: 'Pizza',
    Price: 500,
    Size: 'Large'
}
Object.seal(Food); // Seal the object to prevent adding or removing properties
Food.Price = 600; // Change the Price property
console.log(Food); // Output: { Name: 'Pizza', Price: 600, Size: 'Large' }
Food.NewProperty = 'Burger'; // Try to add a new property    
console.log(Food); // Output: { Name: 'Pizza', Price: 600, Size: 'Large' }
// The new property is not added because the object is sealed.