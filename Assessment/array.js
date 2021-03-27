 let num=new Array(2,7,1,9,12,19,31,17,21);
 console.log(num);// display array
 
  //reverse of array
  let revArr=num.reverse()
  console.log("Reversed Array:");
  console.log(revArr);
 
 // to remove element
let popElement=num.pop();
console.log("Element poped:"+popElement);
console.log(num);

 //add element in array
 let addElement=num.push(16)
 console.log("Element added:"+16);
 console.log(num);

 //sort array ascending
 let sortedAsc=num.sort( function(a,b){
    return a-b;
 });
 console.log("Sorted array in ascending order:") 
 console.log(num);
 
  //sort array descending
 let sortedDse=num.sort( function(a,b){
    return b-a;
 });
 console.log("Sorted array in descending order:") 
 console.log(num);

 //traversing in array
 console.log("Elements of array:") 
 let tav=num.forEach(function(val) { 
   console.log(val) 
 })