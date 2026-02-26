/*
TODO: challenges-4: We are testing on Gemini challenges CRUD but today we are challenge 'C' (Create) part.
*/

//Solution-4:

let studentList = []; // create a empty array
function enrollStudent(name,age,subject){
    let student = {
        name: name,
        age: age,
        subject: subject,
        id: Date.now() // using unique id entry
    };
    studentList.push(student);
    console.log(name + "Profile are created!");
}

// Checking Data

enrollStudent("Tahmid",22,"JavaScript");
enrollStudent("Shanto",22,"Business");
enrollStudent("Rahim",24,"Electrical Engineer");
console.log(studentList);
