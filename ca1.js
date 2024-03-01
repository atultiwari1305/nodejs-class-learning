const students = [
    {id:1,name:"sd",marks:33},
    {id:2,name:"td",marks:83},
    {id:3,name:"ud",marks:43},
    {id:4,name:"vd",marks:73}
];
let max=0; let maxName;
for(var i=0;i<students.length;i++){
    if(students[i].marks>max){
        max=students[i].marks;
        maxName = students[i].name;
    }
}
console.log(maxName);