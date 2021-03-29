//function decleration
function thisIsAFunction(){
    console.log("Function called by function Declration");
}
thisIsAFunction();

//function expression using named function
let a=function namedFunction(){
    console.log("Function called by function expression using named function");
};
a();
//function expression using anonymous function
let b=function(){
    console.log("Function called by function expression using Anonymous function");
};
b();
let c=b;
c();