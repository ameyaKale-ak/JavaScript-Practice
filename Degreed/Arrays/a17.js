
let n=[1,2,3,4,5,10,700];
let p=[1,2,3,4,5,10,70];

function myMax(array){
    if(array.length===0)
    return undefined;

    array.sort((a,b)=>{
        return a-b;
    });
    return array[array.length-1];
}

function max(array){
    if(array.length===0)
    return undefined;
    
    return array.reduce((acc,cur)=>{
        return (acc>cur) ? acc:cur;
    });
}

let m=myMax(n);
console.log(m);
let o=max(p);
console.log(o);
