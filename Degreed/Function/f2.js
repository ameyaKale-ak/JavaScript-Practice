//Hoisting
thisIsAFunction();// will not give error even if it is defined later
a();// will give error as not accessable as it defined later
//function decleration
function thisIsAFunction(){
    console.log("Function called by function Declration");
}


//function expression using named function
let a=function namedFunction(){
    console.log("Function called by function expression using named function");
};
