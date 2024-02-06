const person = {
    name : 'Atul',
    age : 20
};
console.log(person);

const name1 = person.name; //method 1
console.log(name1);

const {age} = person; //method 2 : name should be same as that in object
console.log(age);

const {...s} = person;
console.log(s);