/*
TODO: Problem-22: Write a program - If your friend invites you to his birthday, you will go. And if he does not invite you, you will remove him from your friend list. And if your friend invites you, while going to the party, you will check whether you have more than 1000 taka in your pocket. If you have more, then you will buy a birthday gift for your friend. If you have less than 1000 taka, you will take a rose.
*/
//Solution: 

const friendBirthdayParty_Invite = false;
const pocketMoney = 1000;

if( friendBirthdayParty_Invite == true ){
    if( pocketMoney > 1000 ){
        console.log("You will buy a birthday gift for your friend.");
} else {
    console.log("You will take a rose.");
}
} else{
    console.log("You will remove him from your friend list.");
}