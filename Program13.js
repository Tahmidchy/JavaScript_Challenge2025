/*
TODO: Problem-13: Write a program that will determine if the power in your house goes out and your mobile phone is not charged. If you sit down to read, you will either play video games or you will sit down to read.
*/

//Solution: 

let powerOut = false;
let phoneCharged = false;
if(powerOut == true && phoneCharged == false){
    console.log("You should play video games");
} else{
    console.log("You should sit down to read");
}