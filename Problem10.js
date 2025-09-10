/*
TODO: Problem-10: You have been given the names of a bunch of your friends in the form of a string 'Raju,Rana,Hasan,Kabir,Mahi', now extract their names separately and create an array.
*/

// Solution:

const friendsString = 'Raju,Rana,Hasan,Kabir,Mahi';
const friendsArray = friendsString.split(','); // Split the string by commas to create an array 
console.log(friendsArray); // Output: ['Raju', 'Rana', 'Hasan', 'Kabir', 'Mahi']