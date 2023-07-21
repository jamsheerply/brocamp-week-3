const prompt = require('prompt-sync')();
function check_my_height(height){
  if(isNaN(height)){
    throw "notANumberError";
  }else if(height>50){
    throw "HugeHeightError"
  }else if(height<=0){
    throw "TinyHeightError"
  }else{
    return height;
  }
}
try{
  let my_height=parseFloat(prompt('enter your height :'));
  let returns=check_my_height(my_height);
  console.log(returns)
}
catch(error){
  switch(error){
    case "notANumberError":console.log("notANumberError");break;
    case "HugeHeightError":console.log("HugeHeightError");break;
    case "TinyHeightError" :console.log("TinyHeightError");break;
  }
}