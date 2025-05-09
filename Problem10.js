/*
TODO: Problem-10: Write a program to see if a job candidate can take the exam. The conditions for the exam are - the job candidate must be under 30 years of age and have at least 2 years of experience.
*/

// Solution: 

const candidate_age = 25;
const candidate_experience = 3;
const min_age = 30;
const min_experience = 2;
if( candidate_age < min_age && candidate_experience >= min_experience ){
    console.log("Candidate is eligible for the exam.");
} else{
    console.log("Candidate is not eligible for the exam.");
}