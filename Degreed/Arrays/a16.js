let n=[1,2,3,4,5,6,3,3];

function count(array,element){
    let count=0;
    for(values of array)
        if(values===element)
        count++;
    return count;    
}

function countR(array,element){
   return array.reduce((acc,cur) => {
       let occ = (cur === element) ? 1 : 0;
       console.log(acc,cur,element); 
       return acc+occ;
    },0);
}

let m=count(n,1);
console.log(m);

let o=countR(n,3);
console.log(o);
