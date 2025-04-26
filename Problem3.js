/*
TODO: Problem-3: You and your friend got the same score in the exam, 75. Now you will program to find out whether you got more or fewer marks than your friend, or both of you got the same marks.
 */

//Solution: 

let your_score = 75;
let friend_score = 75;

if (your_score > friend_score) {
    result = "You get more marks than your friend.";
    console.log(result);
} else if( your_score < friend_score) {
    result = "You get fewer marks than your friend.";
    console.log(result);
}else if(your_score <= friend_score){
    result = "You get the same marks as your friend."; 
    console.log(result); // Output: You get the same marks as your friend.
}