function sum(a,b,...args){
  let num= a+b;
  for(let n of args){
    num=num+n;
  }
  return num;
}
let result=sum (10,20,10,20,30);
console.log(result);