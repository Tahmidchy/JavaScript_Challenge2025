/* 
TODO: You have set a target of saving 100 taka, but you have been able to save 95 taka till now. Now write the program. Have you been able to meet your target, or have you not been able to save, or have you been able to save more than your target?
*/
//Solution: 

let my_Target = 100;
let my_Savings = 95;
let my_Status = "Not able to save"; // default status
if (my_Savings >= my_Target) {
    my_Status = "Met the target";
    console.log(`i can full fill my target of ${my_Target} taka`);
}else{
    console.log(my_Status);
}