/*
TODO: Problem-2: Create a function with setTimeout() that will print "I wasted 3 seconds of my life by looking at the screen and doing nothing  " after 3 seconds.
*/

// Solution: 

function wasteTime() {
    setTimeout(function() {
        console.log("I wasted 3 seconds of my life by looking at the screen and doing nothing");
    }, 3000);
}

wasteTime();