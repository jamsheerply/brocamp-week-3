const prompt = require('prompt-sync')();

function main() {
  var array = getArray();
  displayArray(array);
}

function getArray() {
  let arr = [];
  let limit = parseInt(prompt('Enter the limit of the array: '));

  for (let i = 0; i < limit; i++) {
    let value = parseInt(prompt('Enter the value ' + (i + 1) + ': '));
    arr.push(value);
  }

  return arr;
}

function displayArray(arr) {
  console.log('Array:', arr);
}

main();
