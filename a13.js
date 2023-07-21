const prompt = require('prompt-sync')();
let string=prompt('enter the word :');
let flag=0;
let limit=string.length;
for(let i=0 ;i<limit/2;i++){
  if(string[i]===string[limit-1-i]){
    flag=1;
  }else{
    flag=0;
  }
}
if(flag===1){
  console.log('palidrome');
}else{
console.log('not palindrome');
}