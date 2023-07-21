const fn=function (val){
  console.log("hello world",val);
}

const valules =[1,2,3,4,5,6,7];
valules.forEach(function myfunction(val){
  console.log("hello world",val);
});

valules.forEach(fn);