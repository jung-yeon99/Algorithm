const input = require('fs').readFileSync("./dev/stdin").toString().trim().split("\n"); 

const N = +input.shift();

const answer = [...new Set(input)].sort((a,b)=>{
  if(a.length>b.length){
    return 1;
  }else if(a.length<b.length){
    return -1;
  }else{
    if(a>b){
      return 1;
    }else{
      return -1
    }
  }
})
console.log(answer.join('\n'))