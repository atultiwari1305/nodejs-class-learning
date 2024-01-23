const lecture = {
    name : "Advanced Web Development",
    courseCode : 222,
    subtopic: 'Objects in Javascript',
    msg(){
        console.log(`Today is ${this.name} class and we studied ${this.subtopic} of course code ${this.courseCode}`);
    },

    msgArrow: () =>{
        console.log(`Using arrow function to print topic studied ie ${this.subtopic}`);
    }
}

console.log(lecture);
lecture.msg();
lecture.msgArrow();
