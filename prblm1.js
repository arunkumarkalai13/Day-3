const num = 12344
const num1 = 22;
let repeat = (num) => {
const res = num.toString();
count = 0;
    for(i = 0;i<res.length-1;i++){
        if(res[i] === res[i+1]){
                count++;
        }
    }
    if(count > 0){ return true; }
    else{ return false; }
}

console.log(repeat(num));
console.log(repeat(num1));