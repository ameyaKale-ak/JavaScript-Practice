(
 function(){
     class Employee
     {
         constructor()
         {
             console.log("Constructor called");
             this._eid_=0;
             this._ename_="";
             this._esal_=0.0;
             this._gender_='';
         }
         get eid(){
            return this._ename_;
        }
        set eid(id){
           return this._eid_=id;
       }
         get ename(){
             return this._ename_;
         }
         set ename(nm){
            return this._ename_=nm;
        }
        get esal(){
            return this._eid_;
        }
        set esal(sl){
           return this._eid_=sl;
       }
       get gender(){
        return this._gender_;
    }
    set gender (gen){
       return this._gender_=gen;
   }
       calcAnnulSal(){
           return this._esal_*12;
       }
     }
     /******************************** */
    class Manger extends Employee
    {
        constructor(deptName)
        {
            super();
            this.deptName=deptName;
            console.log(new.target.name +"Constructor");
        
        }
        calcAnnulSal()
        {
         return (super.calcAnnulSal()+5000);
        }
    }


     /*********************************** */
     let emp1=new Employee();
     emp1.eid=112;
     emp1.ename="ABC";
     emp1.esal=1300.0;
     emp1.gender="M";
     console.log(`Emp 1 info :${emp1.eid} : 
     ${emp1.ename}: ${emp1.esal}: ${emp1.gender}`);
/************************************************************ */
     let emp2=new Manger("Admin");
     emp2.eid=100;
     emp2.ename="XYZ";
     emp2.esal=100;
     emp1.gender="M";
     console.log(`Emp 2 info :${emp2.eid} : 
     ${emp2.ename}: ${emp2.esal}: ${emp2.deptName}`);
 }

)
()