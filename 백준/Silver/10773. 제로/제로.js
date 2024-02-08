let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let count = Number(input[0]);
let result = 0;
const temp = [];

for (let i = 1; i <= count; i += 1) {
    const value = Number(input[i]);
    if (value === 0) {
        temp.pop();
    } else {
        temp.push(value);
    }
}
for (let k = 0; k < temp.length; k += 1) { // 여기서 변수명을 i에서 k로 변경
    result += temp[k]; // 여기서도 변수명을 i에서 k로 변경
}
console.log(result);