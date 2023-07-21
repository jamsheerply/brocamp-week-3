const prompt = require('prompt-sync')();
class main{
  constructor(){
    let row =parseFloat(prompt('enter the row :'));
    let col=parseFloat(prompt('enter the col:'));
    let arr1=[];
    for(let i=0;i<row;i++){
      let rowvalues=[];
      for(let j=0;j<col;j++){
        let value=parseInt(prompt(`enter the value of ${i}${j}:`))
        rowvalues.push(value);
      }
      arr1.push(rowvalues);
    }
    for(let i=0;i<col;i++){
      console.log(arr1[i]);
    }
  }
}
new main();