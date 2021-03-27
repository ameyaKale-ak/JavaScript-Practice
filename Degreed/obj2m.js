//constructor function
function Circle(r){
    this.radius=r;
    this.draw=function(){
        console.log('Draw');
    }
}

let c1=new Circle(20);
let c2=new Circle(30);
console.log(c1);
console.log(c2);
console.log(c1.constructor);

for(keys in c1)
    console.log(keys,c1[keys]);

