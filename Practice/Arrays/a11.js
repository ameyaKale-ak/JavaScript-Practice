let a=[1,2,44,5,67,5];
//initial sum to 0
let b=a.reduce((sum,cur)=>{
    return sum+=cur;
},0);
console.log(b);

//initial sum to any other value
let c=a.reduce((sum,cur)=>{
    return sum+=cur;
},100);
console.log(c);