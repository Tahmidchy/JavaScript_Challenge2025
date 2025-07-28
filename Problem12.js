/*
TODO: Problem-12 : Write a function that takes the input of marks and returns A if someone gets a mark of 80 or above, B if they get a mark of 70 to 79, C if they get a mark of 60 to 69, D if they get a mark of 50 to 59, and F if they get a mark of less than 50.
*/

// Solution: 

function getGrade(marks) {
    if (marks >= 80) {
        return "Your grade is A";
    } else if (marks >= 70) {
        return "Your grade is B";
    } else if (marks >= 60) {
        return "Your grade is C";
    } else if (marks >= 50) {
        return "Your grade is D";
    } else {
        return "Your grade is F";
    }
};
// Test the function
console.log(getGrade(85)); // Output: Your grade is A
console.log(getGrade(75)); // Output: Your grade is B   
console.log(getGrade(65)); // Output: Your grade is C
console.log(getGrade(55)); // Output: Your grade is D
console.log(getGrade(45)); // Output: Your grade is F
console.log(getGrade(80)); // Output: Your grade is A