let n=[1,2,3,4,5];

function exc(array,excludess){
   let n= [];
   for(elements of array)
       if(!excludess.includes(elements))
        n.push(elements);
   return n;
}

let a=exc(n,[1,2]);
console.log(a);