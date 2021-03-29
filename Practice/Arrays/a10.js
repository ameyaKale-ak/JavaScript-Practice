//filtering an array
let a=[1,23,-3,-4,5,7];
let b=a.filter((value)=>{
    return value>0;
});

console.log(b);

//Mapping an array
let c=a.map((value)=>{
    return {id:value};
});

console.log(c);

//chaining
let d=a.filter((value)=>{
    return value>0;
}).map((value)=>{
    return {id:value};
});
console.log(d);