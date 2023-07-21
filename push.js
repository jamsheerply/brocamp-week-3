const prompt = require('prompt-sync')();
var arr=[];
var limit=prompt('enter the size');
for(i=0;i<limit;i++){
  var value=Number(prompt('enter the number'));
  arr.push(value);
}
console.log(arr);
console.log(typeof(arr[0]));