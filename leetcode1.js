var arr1=[2,7,11,15];
var arr2=[];
var target=9
for(let i=0;i<arr1.length;i++){
  for(j=i+1;j<arr1.length;j++){
    if(arr1[i]+arr1[j]==target){
     var value1=arr1.indexOf(arr1[i]);
    arr2.push(value1);
    var value2=arr1.indexOf(arr1[j]);
    arr2.push(value2);
    }
    
    
  }
}
console.log(arr2);