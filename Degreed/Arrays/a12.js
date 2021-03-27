
function myArrayFromRange(min,max){
    let n=[];
    if(min>max){
         console.log("Minmum should be less than Maximum");    
         return n;
    }
    else{
    for(i=0;true;i++){
        n[i]=min;
        min++;
        if(min>max){
            return n;
        }
    }
}
}

let a=myArrayFromRange(7,6);
console.log(a);

//mosh
function arrayFrom(min,max){
    let n=[];
    for(let i=min;i<=max;i++){
        n.push(i);
    }
    return n;
}


let b=arrayFrom(7,6);
console.log(b);