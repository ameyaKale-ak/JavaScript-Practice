
function countR(array,element){
   if (!Array.isArray(array)){
       throw new Error("Invalid Array....");
   }
    return array.reduce((acc,cur) => {
        let occ = (cur === element) ? 1 : 0;
        console.log(acc,cur,element); 
        return acc+occ;
     },0);
 }

try{
let n=[1,2,3,4,5,6,3,3];
 
let m=countR(null,1);
console.log(m);
}
catch(e){
    console.log(e);
}