let a=10;
var b=10;
{
   let  a=20;// will not reflect
}
{
    var b=30;// will reflect
}
console.log(a);
console.log(b);

function lett(){
    if(true){
    let c=100;
    }
    console.log(c);// will give error
}
function varr(){
    if(true){
        var d=100;
        }
     console.log(d);//will not give error
}
varr();
lett();