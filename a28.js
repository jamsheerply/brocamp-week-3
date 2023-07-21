function car(name,mileage,max_speed){
  this.name=name;
  this.mileage=mileage;
  this.max_speed=max_speed;
}
let s1=new car("bmw",10,300);
let s2=new car("Toyota",13,120);
console.log(s1);
console.log(s2);