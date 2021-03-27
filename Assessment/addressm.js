let address={
    street:'Grove St',
    city:'Daman',
    zipCode:396210
};

function showAddress(address){
    for(key in address)
    console.log(key,address[key]);
}

// factory function
function createAdd(street,city,zip){
    return{
        street:street,
        city:city,
        zip:zip
    };
}
//constructor function
function Address(street,city,zip){
    this.street=street;
    this.city=city;
    this.zip=zip;
}

let s1=createAdd('a','b',1);
console.log(s1);
let s2=new Address('d','e',2);
console.log(s2);