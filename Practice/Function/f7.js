//with getter and setters
let p={
    fname:'A',
    lname:'B',
    get fullname() {
        console.log(`Full Name = ${p.fname} ${p.lname}`)
    },
    set fullname(value){
        if(typeof value!='string')
        throw new Error('Full Name is not string');

        let e=new Error('Enter valid full nameeeeee')
        let pt=value.split(' ');
        if(pt.length<2)
        throw e;
        this.fname=pt[0];
        this.lname=pt[1];
    }
   }
   p.fullname;
   try{
   p.fullname='Ameya KAle';
   }
   catch(e){
       console.log(e)
   }
   p.fullname;