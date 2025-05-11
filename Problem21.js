/*
TODO: Problem-21: You have a gaming app. If the player level is less than 10, you will say "Novice", if it is between 10 and 50, you will say "Expert", and if it is more than 50, you will say "Pro Gamer".
*/

// Solution: 

const player_level = 30;

if( player_level < 10 ){
    console.log("Novice");
} else if(player_level >= 10 && player_level <= 50 ){
    console.log("Expert Gamer");
} else if(player_level > 50){
    console.log("Pro Gamer");
} else{
    console.log("You are not a player");
}