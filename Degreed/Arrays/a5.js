//primitive 
let a=[1,2,3,4];
let b=[5,6,7,8];
// let c=a.concat(b);
let combine=[...a,...b];
let addXtra=[...a,'a','b',...b,'c',{id:007}];
let copy=[...combine];




//object reference
// let d=[{id:'A'}];
// let e=[2,5];
// d[0].id='D';
// let f=d.concat(e);

// let g=[0,1,2,3,4,5,6,7];
// let h=g.slice();
// console.log(c);
console.log(combine);
console.log(copy);
console.log(addXtra);
// console.log(f);
// console.log(h);