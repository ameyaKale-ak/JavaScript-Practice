//varing arguments using arguments object

function calculate(){
       return arguments;
}
console.log(calculate(1,2,3,6));
function calculateSum(){
//    return arguments;
    let sum=0;
   for(let value of arguments)
    sum+=value;
    return sum;
}
console.log(calculateSum(1,2,3,6));