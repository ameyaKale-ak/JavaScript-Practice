function Blog(title,body,author){
    
        this.title=title;
        this.body=body;
        this.author=author;
        this.view=0;
        this.comments=[];
        this.isLive=false;
    }
let a=new Blog('A','B','C');
console.log(a);