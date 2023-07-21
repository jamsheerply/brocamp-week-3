const prompt = require('prompt-sync')();
let arr1=[];
let limit=parseFloat(prompt('enter the limit of the arry'));
for(i=0;i<limit;i++){
  let values=parseFloat(prompt(`enter the the values ${i+1} :`));
  arr1.push(values);
}
let count=0;
for(i=0;i<limit;i++){
  if(arr1[i]%2==0){
    count++
  }
}
console.log(`number of even numbers ${count}`)