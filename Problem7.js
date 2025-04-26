/* 
TODO: Problem-7:You and your friend have taken the exam. Now, when the results are given, it is seen that you got 45 marks and your friend got 97 marks. Now, find out by programming whether your friend got fewer marks than you?
*/

// Solution: 

let your_marks = 45;
let friend_marks = 97;
if (friend_marks < your_marks) {
    console.log("Your friend got fewer marks than you");
}else if (friend_marks > your_marks){
    console.log("Your friend got more marks than you");
}else{
    console.log("You both got the same marks");
}