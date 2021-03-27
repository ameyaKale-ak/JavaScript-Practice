function showproperty(obj){
    for(let key in obj)
    console.log(key,obj[key]);
}

const a={
    name:'A',
    rating:9,
    release:2019,
    director:'b'
};

showproperty(a);