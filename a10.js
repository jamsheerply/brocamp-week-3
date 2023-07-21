const prompt = require('prompt-sync')();
var array1=[];
var array2=[];
var length1=parseFloat(prompt('enter the limit '));
for(var i=0;i<length1;i++){
  var value=parseFloat(prompt(`enter the values in arrays1 position${i + 1}:`))
  array1.push(value)
}
var length2=parseFloat(prompt('enter the limit '));
for(var i=0;i<length2;i++){
  var value=parseFloat(prompt(`enter the values in arrays2 position${i + 1}:`))
  array2.push(value)
}
var temp=array1;
array1=array2;
array2=temp;
console.log('after swapping');
console.log(`array1 ${array1}\n`);
console.log(`array2 ${array2}`);