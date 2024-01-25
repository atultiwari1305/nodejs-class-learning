//REST OPERATOR
//Used to give arguements if exact number of arguements are not known

const item1 = ['Atul', 'Sakshi', 'Raj', 'Manav'];
console.log('Rest Operator in Function')
const nameLister  = (name1, name2, ...name3) => {
    console.log(`Name1 : ${name1}, Name2 : ${name2}, Other Names : ${name3} `);
}
nameLister(...item1); //Here it also uses spread operator to spread array into individual arguements