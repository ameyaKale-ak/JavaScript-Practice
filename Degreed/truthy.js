let arr=[1,2,3,5,'',0];
console.log(truth(arr));

function truth(array){
    let count=0;
    for(let value of array){
        if(value){
        count++;
        }
    }
    return count;
}
