/*
TODO: Problem-21: If you understand the example of removing duplicates well, remove the duplicate numbers from this array [1,5,61,5,87,7,5,81,61];
*/

// Solution: 

function removeDuplicates(array) {
    const uniqueArray = [];
    for (const item of array){
        if (uniqueArray.includes(item) === false) {
            uniqueArray.push(item);
        }
    }
    return uniqueArray;
}
const uniqueArray = removeDuplicates([1, 5, 61, 5, 87, 7, 5, 81, 61]);
console.log("Array after removing duplicates:", uniqueArray);