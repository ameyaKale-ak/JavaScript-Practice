//rest operator
function sum(...arg){
    return arg.reduce((a,b)=>{
        return a+b
    });
}
console.log(sum(1,3,5));