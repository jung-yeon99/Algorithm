let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number)
  .slice(1);

const sol = (arr) => {
  return arr.sort((a, b) => a - b).join('\n');
};
console.log(sol(input));
