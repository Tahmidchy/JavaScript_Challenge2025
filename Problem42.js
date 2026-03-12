/*
TODO: Problem-42: stringOnlyParse Check in the function, if the input is null or empty string or undefined, it will say "Input must be a string"
*/

// Solution: 

function stringOnlyParser (input) {
    try {
        //1. validation check here
        //if input is null, undefined , or an empty string ""
        if(!input || input.trim() === ""){
            throw new Error("input must be a string ");
        }
        // Logic (Assuming we want to parse it if it parse)
        const data = JSON.parse(input);
        console.log("Parsed Successfully :",data);
        return data;
    } catch (error) {
        // This catches both our custom "Input must be a string"
        // AND any JSON.parse errors.
        console.error(error.message);
    }
}

//-- Testing Scenario ---

stringOnlyParser(null); 
stringOnlyParser(undefined);
stringOnlyParser("");
stringOnlyParser("   ");

// All are output same : Input must be a string