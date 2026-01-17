/* 
TODO: Problem-3: Write a function to convert hours to seconds. If I give it hours, it will convert it to seconds.
*/ 

// Solution: 

function hoursToSeconds(hours) {
    // 1 hour = 3600 seconds
    const secondsInHours = 3600;
    return hours * secondsInHours;
}
// Test the function with some examples:
console.log(hoursToSeconds(1)); // Output: 3600