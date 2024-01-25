const item1 = ['Atul', 'Raj'];
const item2 = item1; //synchronized

item2.push('Manav');

console.log(item1);
console.log(item2);

const item3 = item1.slice(); //not synchronized

item3.push('Sakshi');

console.log(item1);
console.log(item3);