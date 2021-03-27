const a=[5,6];

a.push(7,8);
console.log(a);
a.unshift(1,2);
console.log(a);
a.splice(2,0,3,4);
console.log(a);

let last=a.pop();
console.log(a);
console.log(last);
a.splice(2,4);
console.log(a);
let first=a.shift();
console.log(a);
console.log(first);
