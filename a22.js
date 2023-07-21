const prompt = require('prompt-sync')();

function main() {
  var array1 = getArray();
  var array2 = getArray();
  var result = addArray(array1, array2);
  displayArray(result);
}

function getArray() {
  let rows = parseFloat(prompt("Enter the number of rows: "));
  let cols = parseFloat(prompt("Enter the number of columns: "));
  let arr = [];

  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      let value = parseInt(prompt(`Enter the value for (${i}, ${j}): `));
      row.push(value);
    }
    arr.push(row);
  }

  return arr;
}

function addArray(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    let row = [];
    for (let j = 0; j < arr1[i].length; j++) {
      let sum = arr1[i][j] + arr2[i][j];
      row.push(sum);
    }
    result.push(row);
  }

  return result;
}

function displayArray(arr) {
  console.log('Result:', arr);
}

main();
