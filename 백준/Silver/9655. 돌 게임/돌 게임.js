let input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

function sol(input) {
  return input % 2 === 0 ? 'CY' : 'SK';
}
const answer = sol(input);
console.log(answer);