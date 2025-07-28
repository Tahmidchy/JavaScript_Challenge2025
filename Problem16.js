/*
TODO: Problem-16: After finding the average of odd numbers in an array, return the value up to two decimal places.
*/

//Solution: 

function averageOfOddNumbers(numbers) {
    let sum = 0;
    let count = 0;

    for (const number of numbers) {
        if (number % 2 !== 0) { // Check if the number is odd
            sum += number; // Add to the sum
            count++; // Increment the count of odd numbers
        }
    }

    if (count === 0) {
        return "No odd numbers found"; // Return message if no odd numbers are found
    }

    const average = sum / count; // Calculate the average
    return average.toFixed(2); // Return the average rounded to two decimal places
};

// Test the function
console.log(averageOfOddNumbers([1, 2, 3, 4, 5])); // Output: "3.00"
console.log(averageOfOddNumbers([2, 4, 6, 8])); // Output: "No odd numbers found"
console.log(averageOfOddNumbers([10, 15, 20, 25])); // Output: "20.00"
