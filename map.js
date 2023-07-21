const numbers=[1,2,3,4,5];
let squared=[];
for(i=0;i<numbers.length;i++){
  squared.push(numbers[i]*numbers[i]);
}
console.log(squared);
const result=numbers.map(function(num){
  return num*num;
})
// const result=numbers.map(num => num*num);
console.log(result);

//string examples
const names=['james','malie','rosa']
// const fullNames=names.map(function(name){
//   return name+" smith";
// })
const fullNames=names.map(nam=> nam+' smith');
console.log(fullNames);