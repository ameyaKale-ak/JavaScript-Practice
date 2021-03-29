let n=[1,2,3,4,5,7];

function include(array,element){
     for(let value of array)
     if(value===element){
         return true;
     }
     return false;
}

console.log(include(n,8));