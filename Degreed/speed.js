function speed(n){
    const slimit=70;
    const kmp=5;
    if(n<slimit+kmp){
        return 'Ok';
    }
    else
    {
       let m=n-slimit;
        if((Math.floor(m/kmp))>=12){
            return 'License Suspended';
       }
       else
       return (Math.floor(m/kmp));
    }
}

let a=speed(200);
console.log(a);