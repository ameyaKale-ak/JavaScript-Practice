function star(n){
    for(let row=1;row<=n;row++){
        let pattern='';
        for(let i=0;i<row;i++){
            pattern+='*';
        }
        console.log(pattern);
    }
}
star(4);