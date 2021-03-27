//-----------This is object creation using new Object()-------------
var emp2={}
var emp1=new Object();
emp1.empId=789;
emp1.empName="Krisha";
console.log(emp1.empId);
console.log(emp2.empId);
console.log(emp2.empName);
emp1.talk=function(nm)
{
    console.log( this.empName+ "Talking  ")
}
console.log(emp1.talk())
for( key in emp1)
{
    console.log("... KEY : "+ key + " VALUE : "+emp1[key]);
}