/*
TODO: Problem-26: Suppose you are going to have a party, now you will first check whether more than 100 guests will come to the party? If they will, then check whether everyone will bring gifts. If they bring gifts, say let's party all night, and if not, say I will party with you.
*/

// Solution: 

function checkPartyGuests(guests) {
    if (guests > 100) {
        const bringsGifts = confirm("Will everyone bring gifts?");
        if (bringsGifts) {
            console.log("Let's party all night!");
            } else {
            console.log("I will party with you.");
        }
    }
} 

// Solution: Number-2 

const guest_number_up100 = true;
const guest_bring_gift = true;

if( guest_number_up100 == true){
    if( guest_bring_gift == true){
        console.log("Let's party all night!");
    } else {
        console.log("I will party with you.");
    }
} else{
    console.log("Let's have a small gathering.");
}