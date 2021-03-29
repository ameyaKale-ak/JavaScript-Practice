let circle={
    radius:2,
    area:20,
    get showRadius(){
    console.log(`Radius is ${this.radius}`);
    },
    get showArea(){
     console.log(Math.PI*this.radius*this.radius);
    },
    set setRadius(value){
       this.radius=value;
    }
};

circle.showRadius
circle.setRadius=4;
circle.showRadius
circle.showArea;