function sum(n){
    let s=0;
 for(let i=0;i<=n;i++){
   if((i%3===0)||(i%5===0)){
       s+=i;
   }
}
return s;
}

let a=sum(10);
console.log(a);