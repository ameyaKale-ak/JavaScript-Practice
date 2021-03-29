//self
let o={
    id:1,
    number:[1,3,24,4],
    showNum(){
        self=this;
        this.number.forEach(function(value){
            console.log(self.id,value)
        });
    }
}
o.showNum();
// bind
let p={
    id:1,
    number:[1,3,24,4],
    showNum(){
        this.number.forEach(function(value){
            console.log(self.id,value)
        }.bind(this));
    }
}
p.showNum();
//arrow function
let r={
    id:1,
    number:[1,3,24,4],
    showNum(){
        this.number.forEach((value)=>{
            console.log(self.id,value)
        });
    }
}
r.showNum();