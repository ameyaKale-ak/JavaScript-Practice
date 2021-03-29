function sum(...args){
    if(args.length===1 && Array.isArray(args[0]))
    args=[...args[0]];

  return args.reduce((a,b)=>{return a+b});
}

let a=sum(1,2,3,4,5,6);
let b=sum([1,2,3,4,5,6]);
console.log(a);
console.log(b);