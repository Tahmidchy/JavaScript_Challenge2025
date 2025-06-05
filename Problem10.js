/*
TODO: Problem-10: While printing the numbers from 111 to 110 using the while loop, the numbers will be divided by 2.
*/
// Solution:

let num = 111;
while (num >= 110) {
    console.log(num / 2);
    num--;
};


// Output:
// 55.5
// 54.5
// 53.5
// 52.5
// 51.5 

// Expalnation:
// 1. We start with the variable `num` initialized to 111.
// 2. The while loop checks if `num` is greater than or equal to 110.
// 3. Inside the loop, we print the value of `num` divided by 2.
// 4. After printing, we decrement `num` by 1.
// 5. The loop continues until `num` is less than 110.
// 6. The output will be the numbers from 111 to 110 divided by 2, printed in descending order.
// 7. The loop will run 5 times, printing the numbers 55, 54
// 8. 53, 52, and 51.