/*
TODO: Problem-4: Write a function that converts centimeters to meters. You know that 1 meter is equal to 100 centimeters.
*/

// Solution: 

function centimetersToMeters(centimeters) {
    // We know that 1 meter is equal to 100 centimeters, so we can divided the centimeters by 100 to get the meters.
    let meters = centimeters / 100;
    return meters;
}
// Test the function
console.log(centimetersToMeters(100));  // Output: 1