let a=[
    {id:1,name:'A'},
    {id:2,name:'B'},
    {id:3,name:'C'},
    {id:4,name:'D'}
];

let c=a.find(function(a){
    return a.name==='B'
});

console.log(c);

let d=a.findIndex(function(a){
    return a.name==='D'
});
console.log(d);
let w=a.findIndex(a => a.name==='E');//in arow function
console.log(w);