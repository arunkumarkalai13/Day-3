const digits = 3345;
const squares = digits => {
const num = digits.toString();
let res = '';
for(let i = 0; i < num.length; i++){
    const square = Math.pow(num[i], 2);
    res += square;
};
return res;
};

console.log(squares(digits));
