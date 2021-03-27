let a=[1,32,4,-3,11];
//every
let b=a.every((value)=>{
    return value>0;
});
console.log(b);
//some
let c=a.some((value)=>{
    return value>0;
});
console.log(c);