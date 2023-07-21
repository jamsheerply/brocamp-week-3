const prompt = require('prompt-sync')();
let arr1 = [];
let arr2 = [];
let limit = parseFloat(prompt('Enter the limit: '));

for (let i = 0; i < limit; i++) {
  let values = parseFloat(prompt(`Enter the value ${i + 1}: `));
  arr1.push(values);
}

for (let i = 0; i < limit - 1; i++) {
  if (i === limit) {
    break;
  }
  let values2 = arr1[i] * arr1[i + 1];
  arr2.push(values2);
}

console.log('Original array: ' + arr1);
console.log('Array after multiplication: ' + arr2);
