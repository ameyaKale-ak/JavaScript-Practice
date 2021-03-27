var a=[1,2,39,6,4];
console.log(a);

a.push(1212);
console.log(a);

let v=a.push(99);
console.log(v);

console.log(a);
a.pop();
console.log(a);
let y=a.pop();
console.log(y);
console.log(a);


var url="https://www.google.com/search?q=wah is mental health";
var a=encodeURI(url);
console.log(a);

var urlc="happy birthday to mr";
var b=encodeURIComponent(urlc);
console.log(b);

var c="https://www.google.com/search?q=wah%20is%20mental%20health";
var d=decodeURI(c);
console.log(d);

var e="happy%20birthday%20to%20mr";
var f=decodeURIComponent(e);
console.log(f);

