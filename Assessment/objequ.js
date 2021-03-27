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

function areEqual(address1,address2){
     let k1='';
    for(let key1 of Object.keys(address1))
        k1+=key1;
        let k2='';
     for(let key2 of Object.keys(address2))
            k2+=key2;
    if(k1===k2){
        console.log('Equal');
    }    
    else
    console.log('Not Equal');
}

function equalRef(a1,a2){
    if(a1===a2){
        console.log('Equal');
    }    
    else
    console.log('Not Equal');
}

let s1=createAdd('a','b',1);
let s3=s1;
// console.log(s1);
let s2=new Address('d','e',2);
// console.log(s2);

areEqual(s1,s2);
equalRef(s1,s2);
equalRef(s1,s3);