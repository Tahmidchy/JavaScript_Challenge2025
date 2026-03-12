/*
TODO: Problem-38: ValidateInput নামে একটা ফাংশন বানা , যেটাকে ইউসার এর ইনপুট চেক করবে , ইনপুট হতে হবে ইমেইল এড্রেস (যেমন : টেস্ট @ এক্সাম্পল .কম )। ইনপুট ই-মেইলে যদি @ চিহ্ন না থাকে তাহলে custom এরর দেখাবে " ইনভ্যালিড ইমেইল ফরম্যাটে "
*/

//Solution:
function ValidInput(email) {
  try{
    // Checking valid email here with this "@" symbol
    if (!email.includes("@")) {
      //if it doesn't we manually check this
      throw new Error("Invalid Email formate");
    }
    console.log("Success ! Email is Valid : ",email);
    return true;
  } catch (error) {
    // This block catch "Invalid email formate" error we throw above
    console.error(error.message);
    return false;
  }
}

// Now we are testing our code.
ValidInput("example@email.com");
ValidInput("Email-try.com");