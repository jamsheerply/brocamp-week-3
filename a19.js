const prompt = require('prompt-sync')();
let annualincome=parseFloat(prompt('enter your income :'));
if(annualincome<=250000){
  console.log('no tax');
}else if(annualincome>25000&&annualincome<=500000){
  console.log('income tax amount '+(annualincome*5)
/100)
}else if(annualincome>500000&&annualincome<=1000000){
  console.log('income tax amount'+(annualincome*20)/100)
}else if(annualincome>1000000&&annualincome<=5000000){
  console.log('income tax amount'+(annualincome*30)/100);
}