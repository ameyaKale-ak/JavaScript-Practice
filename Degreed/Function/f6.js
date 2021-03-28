//without getters and setters
let o={
 fname:'C',
 lname:'D',
 fullname() {
     console.log(`Full Name = ${o.fname} ${o.lname}`)
 }
}
o.fullname();
//with getter and setters
let p={
    fname:'A',
    lname:'B',
    get fullname() {
        console.log(`Full Name = ${p.fname} ${p.lname}`)
    },
    set fullname(value){
        let pt=value.split(' ');
        this.fname=pt[0];
        this.lname=pt[1];
    }
   }
   p.fullname;
   p.fullname='Ameya Kale';
   p.fullname;
