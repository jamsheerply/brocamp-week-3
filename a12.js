const prompt = require('prompt-sync')();
let arr=[];
let limit=parseFloat(prompt('enter the limit '));
for( let i=0;i<limit;i++){
let values=parseFloat(prompt(`enter the values ${i+1}:`));
arr.push(values);
}
arr.sort();
arr.reverse();
console.log(arr);