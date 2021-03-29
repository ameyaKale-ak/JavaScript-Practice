//use  of this keyword
function ths(){
    console.log(this);
}

ths();

let a={
    id:1,
    thss(){
        console.log(this);
    }
}
a.thss();

function V(id){
    this.id=id;
    console.log(this);
}
 let b=new V(22);
