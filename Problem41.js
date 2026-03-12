/*
TODO: Problem-41 : Write a code block using json.parse, where in the try block, catch {role :'CEO', weeklyHours : 1000} data coming in, if you can parse the data and get an error, whatever it is, show the console "week is over"
*/

// Solution-41: 

const DataInput = '{"role" : "CEO","WeeklyHours" : 1000}';
try {
    // Attempting passing data
    const ParseData = JSON.parse(DataInput);
    console.log(" SuccessFully Data Pass : ",ParseData);
} catch (error) {
    // If the data parse failed than print this message
    console.log("Week is Over");
}