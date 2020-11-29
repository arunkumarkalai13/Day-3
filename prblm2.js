let arr = [1,2,3,4,5];
let Second = (n) =>{
    let secondNum = n.sort(function (a,b){
        return a-b
        });
    let secondLargest = secondNum[n.length-2];
    return secondLargest;
    }
console.log(Second(arr));