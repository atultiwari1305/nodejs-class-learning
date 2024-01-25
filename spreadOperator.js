//spread operator
//spreads the array elements as single elements or say arguements
const item1 = ['Atul', 'Raj'];
const item2 = [item1];
const item3 = [...item1];

item1.push('Shubham');
item2.push('Manav');
item3.push('Manav');

console.log(item1);
console.log(item2);
console.log(item3);

console.log();
console.log('Spread in Function')
const nameLister  = (name1, name2, name3) => {
    console.log(`Name1 : ${name1}, Name2 : ${name2}, Name3 : ${name3}`);
}
nameLister(...item1);