const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num=0;
const A = parseInt(input.shift());

function F(num){
    if(num<=1) return 1;
    return num * F(num-1);
}
for(let i = 0 ;i <A; i++){
    const arr= input[i].split(' ');
    const N = parseInt(arr[0]);
    const M = parseInt(arr[1]);
   console.log(Math.round((F(M)/(F(M-N)*F(N)))));
    
}