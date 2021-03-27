//simple sort
let a=[1,2,5,6,8,9];
let b=a.sort();
console.log(b);

let c=['S','C','A'];
let d=c.sort();
console.log(d);
 
// sort with callback compare function
let e=[1,23,45,566,76];
e.sort((a,b)=>{
    return (a-b);
});
console.log(e);

// sorting alphabates
let f=['A','a','p','P','p'];
let g=f.sort((a,b)=>{
    A=a.toUpperCase();
    B=b.toUpperCase();
    return(A-B);
});
console.log(g);