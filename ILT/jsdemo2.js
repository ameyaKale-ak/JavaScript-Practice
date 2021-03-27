var Person = {
    panNo:"0",
    personName:"Unknown",
    setPerson:function(pan,nm)
    {
     this.panNo=pan;
     this.personName=nm;
    },
    getPersonInfo()
    {
        return  "PAN No : " +this.panNo +  " Name : "+ this.personName ;
    }
 }
 
 Person.setPerson("kjkj878","Vaishali");
 console.log(Person.getPersonInfo());
 
 var customer=
{
    custmerId:"899",
    getAllCustInfo:function(){ console.log(" Customer id :"+this.custmerId)}
}

/*************prototype inheritance using __proto__************** */
customer.__proto__=Person;
customer.getAllCustInfo();
customer.getPersonInfo();
/*******************inheri using Object.create()(((((((((()))))))))) */
console.log("citizen---------");
var citizen=Object.create(customer);
console.log(citizen.getPersonInfo());
citizen.getAllCustInfo();
