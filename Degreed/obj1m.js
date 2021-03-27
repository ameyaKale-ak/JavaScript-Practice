//factory function
function createCircle(r){
    return{
        radius:r,
        draw(){
            console.log('Draw');
        }
    };
}

let c1=createCircle(5);
let c2=createCircle(20);
console.log(c1);
console.log(c2);
console.log(c1.constructor);
