let repeat = (num) => {
const res = num.toString();
count = 0;
let len = res.length - 1;
        if(res[len-1] === res[len])
        { 
            return true; 
        }
        else { 
            return false; 
        }
}
// test cases
const num = 1234423
const num1 = 22;
const num2 = 12344

console.log(repeat(num));
console.log(repeat(num1));
console.log(repeat(num2));
