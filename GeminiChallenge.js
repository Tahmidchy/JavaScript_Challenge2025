/*
TODO: This is Gemini Challenge for batter understanding of promise try, catch and finally block using json parsing.
*/

// Solution: This is Gemini Challenge for batter understanding of promise try, catch and finally block using json parsing.

const data = `{
    "name": "John Doe",
    "age": 30,
    "city": "New York"
}`; // Properly formatted JSON string
try {
    const result = JSON.parse(data);
    console.log(result);
} catch (error) {
    console.error(error.name);
    console.log(error.stack);
} finally {
    console.log("Finished parsing JSON.");
}

