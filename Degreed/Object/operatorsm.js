let x=5;
let y=3;
//arithmetic operators
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y); 
console.log(x**y);  

console.log(x++);
console.log(++x);

console.log(--y);
console.log(y--);
console.log(y);

//assignment operators
y+=5;
console.log(y);

//Comparison Opertaor
console.log(x<5);
console.log(y>1);
console.log(y===2);
console.log(y!==2);
//equality
console.log(y===6);//strict equality
console.log(y==='6');//lose equality
console.log(y=='6');
//ternary
let p=100;
let type=p>100?'gold':'silver';
console.log(type);
//Logical
console.log(true && true);
console.log(true && false);
console.log(true || true);
console.log(true || false);
console.log(!true);
//logical operators with non-boolean 
let a='red';
let b='yellow';
let c=a||b;
console.log(c);
a=undefined;
c=a||b;
console.log(c);
//bitwise
console.log(1|2);
console.log(1&2);
//swap
let a='red';
let b='green';
let c='';
c=a;
a=b;
b=c;
console.log(a);
console.log(b);
