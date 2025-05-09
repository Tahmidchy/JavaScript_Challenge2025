/*
TODO: Problem-16: You run a restaurant where children under 12 eat free and people over 60 get a 50% discount on their food bill. No discount is given to everyone else.
*/

// Solution: 

const children_age = 12;
const seniorCityGen_age = 60;

if( children_age <= 12 && seniorCityGen_age >= 60 ){
    console.log("Free Food for the children which age is less than or equal to 12 and the customer which age is greater than or equal to 60 get 50% discount on their food bill.");
}else{
    console.log("No discount is given to everyone else.");
}
