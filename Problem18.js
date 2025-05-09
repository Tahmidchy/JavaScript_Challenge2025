/*
TODO: Problem-18: In an exam, if a student's mark is less than 50, you will say that he/she has failed, and if the student's mark is between 50 and 80, you will say that he/she has passed. And if the mark is above 80, you will say that you have got an A+.
*/

//Solution: 

const student_Mark = 70;
if (student_Mark < 50) {
    console.log("Sorry , you have failed try again");
} else if(student_Mark >= 50 && student_Mark <= 80) {
    console.log("Congratulations !!You have passed");
} else if(student_Mark >= 80) {
    console.log("Congratulations !!You have got an A+");
} else{
    console.log("Invalid mark");
}