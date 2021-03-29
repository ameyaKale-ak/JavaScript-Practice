//default in function
function SI(p,r=2.5,t=3){
    let si=(p*r*t)/100;
    return si;
}

console.log(SI(1000));//without r and t
console.log(SI(1000,2));//with r and without t
console.log(SI(1000,2,100));//with both r and t
