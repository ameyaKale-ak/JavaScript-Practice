function fizzBuzz(n){  

    if(typeof(n)!=='number')
        return 'Not a number';
    if ((n%3===0) && (n%5===0))
       return 'FizzBuzz';
    if(n%5===0)
        return  'Buzz';
    
    if(n%3==0)
        return 'fizz';
    if(!((n%5==0) && (n%3==0)))
        return n; 
}

let a=fizzBuzz(7);
console.log(a);
