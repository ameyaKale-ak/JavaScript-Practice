var promise1=new Promise(
    (resolve,reject)=>
    {
        setTimeout(
           ()=>{
               let rollNo=[1,2,3,4];
               //resolve(rollNo);
               reject("Error ehile fetching");
           },
           2000);
           
         }
);