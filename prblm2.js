let arr = [1,2,3,4,5];
let Second = (n) =>{
    let secondNum = n.sort(function (a,b){
        return b-a;
        });
    return secondNum[1];
    }
console.log(Second(arr));
