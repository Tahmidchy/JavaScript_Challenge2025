/*
TODO: Problem-26: const Player = { Name Messi , Goals 800 , Club Inter Miami }; Freeze the object using the object freeze() method. Then add the new property and see if it works?
*/

// Solution:

const player = {
    Name: "Messi",
    Goals: 800,
    Club: "Inter Miami"
};
Object.freeze(player); // Freeze the object to prevent modifications
player.Name = "Ronaldo"; // Attempt to change the Name property
player.Goals = 1000; // Attempt to change the Goals property
player.Club = "Al Nassr"; // Attempt to change the Club property
console.log(player); // Output: { Name: "Messi", Goals: 800, Club: "Inter Miami" }
// The properties of the player object remain unchanged, and any attempts to modify them are ignored.