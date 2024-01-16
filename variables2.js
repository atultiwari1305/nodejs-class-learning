var a = 'Atul';
var a;
//var can be redeclared and modified
//var can be initialized later after the declaration

let b ;
//let cannot be redeclared but can be modified
//let can be initialized later after the declaration

const c = 'Student';
//const can neither be redeclared nor modified
//need to be initialized at the same line of initialization

function varScope(){
    var number = 1;
    if(true){
        var number = 2;
        console.log(number);
    }
    console.log(number);
}
varScope();

function letScope(){
    let number1 = 1;
    if(true){
        let number1 = 2;
        console.log(number1);
    }
    console.log(number1);
}
letScope();