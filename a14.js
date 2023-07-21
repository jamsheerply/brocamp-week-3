const prompt = require('prompt-sync')();
  let size = Number(prompt("Enter the size of the array : "));
  let arr1 = [];
  let arr2 = [];
  let sum = [];
  console.log("Enter the values for array 1 : ");
  for(let i=0;i<size;i++){
      arr1[i] = [];
      for(let j=0;j<size;j++){
          let element = Number(prompt(`Enter the element for arr[${i}][${j}] : `));
          arr1[i][j] = element;
      }
  }
  console.log("Array 1 : "+arr1);


  console.log("Enter the values for array 2 : ");
  for(let i=0;i<size;i++){
      arr2[i] = [];
      for(let j=0;j<size;j++){
          let element = Number(prompt(`Enter the element for arr[${i}][${j}] : `));
          arr2[i][j]  = element;
      }
  }
  console.log("Array 2 : "+arr2);
  console.log("Sum of the arrays : ");
  for(let i=0;i<size;i++){
      sum[i] = [];
      for(let j=0;j<size;j++){
          let s = arr1[i][j] + arr2[i][j];
          sum[i][j] = s;
      }
  }
  console.log("Sum: "+sum);