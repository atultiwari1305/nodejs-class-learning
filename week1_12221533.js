//create javascript Objects and functions

const classRoom = {
    roomNo : '36-707',
    subjectCode : 'INT222',
    subjectName : 'Advanced Web Development'
}

const details = () =>{
    return `In roomNo : ${classRoom.roomNo}\nClass of Course Code ${classRoom.subjectCode}\nCourse Name ${classRoom.subjectName}`;
}

console.log(details());