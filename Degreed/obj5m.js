let c={
    radius:20,
    diameter: 40,
    draw: function() {

        console.log('draw');
    }
};
console.log(c);
let b={};
Object.assign(b,c);
console.log(b);
let a={...b};
console.log(a);