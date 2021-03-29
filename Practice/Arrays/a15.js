let n=[1,2,3,4,5];

function move(array,index,offset){

let pos=index+offset;
if(pos>=array.length || pos<0){
    console.error('Invalid Offset');
    return;
}
let n=[...array];
let m=n.splice(index,1)[0];
n.splice(pos,0,m);
return n;

}

let a=move(n,1,3);
console.log(a);