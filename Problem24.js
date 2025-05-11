/*
TODO: Problem-24:  You have created an application. First, check whether your user account is active or not. If it is active, check its subscription; if it is premium, show it the premium features, and if not, tell it to view the free version.
*/
 
// Solution: Number-1

function checkUserAccount(user) {
  if (user.isActive) {
    if (user.subscription === 'premium') {
        showPremiumFeatures();
        } else {
            console.log("Watching free version")
            }
    } else {
        console.log("You account is not active");
        }
    }

    // Solution : Number-2

    const user_account_is_active = false;
    const user_subscription = false;

    if(user_account_is_active == true){
      if (user_subscription == true){
        console.log("Now you are enjoy Premium Service");
      } else {
        console.log("Please check the free version.");
      }
    } else{
      console.log("Your account is not active.");
    }