/*
TODO: Problem-23: If a guest comes to your house, first ask them if they want tea? If they say yes, then ask them again if they want biscuits? If they say no, then print "Just prepare tea" and if they want to eat and don't want to eat, then say "Sit down and watch TV".
*/

// Solution: Number-1
/*

// Ask the guest if they want tea
let teaResponse = prompt("Do you want tea? (yes/no)");
// If they want tea, ask if they want biscuits
let biscuitResponse = teaResponse.toLowerCase() === 'yes' ? prompt("Do you want biscuits? (yes/no)") : null;

function guestPreference(teaResponse,biscuitResponse){
    if(teaResponse.toLowerCase() === 'yes'){
        if(biscuitResponse.toLowerCase() === 'yes') {
            console.log("Prepare tea and biscuits");
        } else {
            console.log("Just prepare tea");
        }
    } else{
        console.log("Sit down and watch TV");
    }
}


// I know this code some complex but it effectively handles different guest preferences. this problem solving take 35 minutes and demonstrates the importance of asking questions to understand needs.
/* 
I think this flow chart can help understand the guest's preferences and how to respond appropriately.

Start
  │
  ├─ Ask "Do you want tea?" → teaResponse
  │
  ├─ If teaResponse is "yes":
  │   │
  │   └─ Ask "Do you want biscuits?" → biscuitResponse
  │
  └─ Else:
      └─ biscuitResponse = null

Call guestPreference(teaResponse, biscuitResponse)
  │
  ├─ If tea is "yes":
  │   ├─ If biscuits "yes" → Prepare both
  │   └─ Else → Prepare tea only
  │
  └─ Else → Watch TV

*/

//Solution Number-2 :

const guestWant_Tea = true;
const guestWant_Biscuits = false;

if(guestWant_Tea == true){
    if(guestWant_Biscuits == true) {
        console.log("Prepare tea and biscuits");
    } else {
        console.log("Just prepare tea");
} 
} else{
    console.log("Sit down and watch TV");
}
