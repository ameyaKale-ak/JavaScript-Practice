function blogCreate(title,body,author,view,isLive){
    return{
        title:title,
        body:body,
        author:author,
        view:view,
        comments:[{
            author:author,
            body:body
        }],
        isLive:isLive
    }
}

let b1=blogCreate('A','B','C',200,true);
console.log(b1);