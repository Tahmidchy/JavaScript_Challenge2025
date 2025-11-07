/*
TODO: Example-3: Now we are testing on Type validation Error with string concatenation.
*/

// valid Type Validation

function fullName(firstName, LastName){
    if(typeof firstName !== 'string'){
        return "Please provide valid first name";
    } else if(typeof LastName !== 'string'){
        return "Please provide valid last name";
    }
    const result = firstName + " " + LastName;
    return result;
}
const output = fullName("John", "Doe");
console.log(output); // John Doe
// invalid Type Validation
const output2 = fullName("John", 123);
console.log(output2); // Please provide valid last name