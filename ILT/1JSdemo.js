/*
function abc(name)
{
    console.log("Welcome :"+name);
}
abc("Ameya");
/*var sayHello=function(name){
    console.log("Welcome : "+name)
}*/
/******************************* */
//var greetMe = new Function("name", "console.log('welcome : '+name)")
//sayHello("Aranab");
//greetMe("Laxmi");
/********************************** */
function emp(eid,ename,esal)
{
    this.empId=eid;
    this.empName=ename;
    this.empSal=esal;
    var empAge;
    this.setAge=function(eage){
        this.empAge=eage;
    }
}
       var ameobj=new emp(100,"Ameya",20000);
       
      console.log("EmpId :"+ameobj.empId);
      console.log("EmpName :"+ameobj.empName);
      console.log("EmpSal :"+ameobj.empSal);
      console.log("EmpAge :"+ameobj.setAge());
 
