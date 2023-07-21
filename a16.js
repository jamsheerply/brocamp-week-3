const prompt = require('prompt-sync')();
let num = parseFloat(prompt('Enter the number: '));
let flag = 0;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    flag = 1;
    break;
  }
}

if (flag === 0) {
  console.log(`${num} is prime`);
} else {
  console.log(`${num} is not prime`);
}
