//for
for(let i=0;i<8;i++){
    console.log(i);
}
//while
let i=0;
while(i<8){
    console.log(i);
    i++;
}
//do while
let i=0;
do{
    console.log(i);
    i++;
}while(i<8);
// // infinite loop
// for(let i=0;true;i++){
//  console.log(i);
// }

//for in
const person={
    name:'Ak',
    age:22,
    id:10,
    city:'Daman'
};

for(let key in person)
console.log(key,person[key]);

//for of
const colors=['red','yellow','green','blue'];
for(let c of colors)
console.log(c);

