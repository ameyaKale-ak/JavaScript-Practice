

function grade(array){
    const avg=avgfun(array);
    if(avg < 60) return 'F';
    if(avg < 70) return 'D';
    if(avg < 80) return 'C';        
    if(avg < 90) return 'B';
    return 'A';
}
 function avgfun(a){
     let sum=0;
     for(let values of a)
     sum+=values;
     return (sum/a.length);

 }


const marks=[92,98,93];
console.log(grade(marks));