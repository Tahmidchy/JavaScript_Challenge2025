/*
TODO: Problem-43: Create a code using try-catch-finally, where the user will simulate deleting an account, in the try block we will say "Deleting account", in the catch block we will say "Failed to delete account" and in the finally block we will say "Account deletion attempt finished"
*/

// Solution: 
function simulateAccountDeletion(userId) {
  try {
    // This is where we attempt the main action
    console.log("Deleting account...");

    // Simulating a potential error (e.g., database is offline)
    // To test the catch block, you could uncomment the line below:
    // throw new Error("Database Connection Lost");

    console.log(`Account ${userId} deleted successfully.`);

  } catch (error) {
    // This only runs if something goes wrong in the try block
    console.error("Failed to delete account");
    
    // In a Google-level app, you'd log the specific error here:
    // console.error("Error details:", error.message);

  } finally {
    // This runs EVERY time, regardless of success or failure.
    // Perfect for updating the UI or closing connections.
    console.log("Account deletion attempt finished");
  }
}

// --- Testing the simulation ---
simulateAccountDeletion("User_123");

