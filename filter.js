const numbers=[1,2,3,4,5];
let result=[];
for (let i=0;i<numbers.length;i++){
  const num=numbers[i];
  if(num<3){
    result.push(num);
  }
}
console.log(result)
//filter
// const lessThan3=numbers.filter(function(num){
//   if (num < 3){
//     return true;
//   }else{
//     return false;
//   }
// })
const lessThan3=numbers.filter(num =>num<3);
console.log(lessThan3)

const evenNumbers=num.filter(even => even%2==0)
console.log(evenNumbers)