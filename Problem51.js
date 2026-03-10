/*
/*
TODO: Problem-50: Async-await দিয়ে এমন একটা ফাংশন লিখো , যেটা ব্যবহার ID প্যারামিটার হিসাবে নিবে , তারপর 'https ' থেকে সেই ব্যবহারের ডাটা লোড করবে , ব্যবহার এর মধ্যে লাস্টে টেম্পলেট স্ট্রিং দিয়ে প্যারামিটার হিসাবে যেই ID দিবি, সেটা ডায়নামিক ভাবে বসিয়ে দিবি কোনো এরর হলে সেটা কে try -catch দিয়ে হ্যান্ডেল করবি with Company name print

*/

// Solution: 

async function getUserProfessionalInfo(userId) {
  try {
    console.log(`Loading profile for User ID: ${userId}...`);

    // তোমার আইডি প্যারামিটারটি এখানে ডাইনামিকালি সেট হচ্ছে
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!response.ok) {
      throw new Error("User data could not be retrieved");
    }

    const user = await response.json();

    // অবজেক্ট ডিস্ট্রাকচারিং ব্যবহার করে নাম এবং কোম্পানির নাম বের করা
    const { name, company } = user;

    console.log(`User Name: ${name}`);
    console.log(`Company Name: ${company.name}`);
    console.log(`Catchphrase: "${company.catchPhrase}"`);

  } catch (error) {
    // যেকোনো এরর (যেমন ভুল আইডি বা নেটওয়ার্ক ইস্যু) এখানে হ্যান্ডেল হবে
    console.error("Invalid input or server error");
  } finally {
    console.log("Profile loading attempt finished");
  }
}

// ফাংশন কল করা
getUserProfessionalInfo(1);
