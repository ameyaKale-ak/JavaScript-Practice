let person=
{
    name:'Ameya',
    age:22
};
console.log(person);
//dot notation
person.name='Ak'
console.log(person.name);

//Bracket notation
let selection='age';
person[selection]=23;

console.log(person);
console.log(person.name);
console.log(person['age']);