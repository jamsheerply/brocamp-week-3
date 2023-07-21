const prompt = require('prompt-sync')();
class Myclass{
  constructor(){
    
   const choice=parseInt(prompt("Enter the choice :\n1.circle\n2.square\n3.rectangle\n4.triangle\n"));
   switch(choice){
    case 1: this.circle();
    break;
    case 2: this.square();
    break;
    case 3: this.rectangle();
    break;
    case 4: this.triangle();
    break;
    default:console.log("Invalid entry");
    break;
  }
  }
 circle(){
  let r=parseFloat(prompt(`Enter the radius of circle: `));
  let area=3.14*r**2;
  console.log(`Area of the circle is ${area}`);
     }
      square(){
      let a=parseFloat(prompt(`Enter the length of square: `));
      let area=a**2;
      console.log(`Area of the square is ${area}`);
         }
         rectangle(){
          let l=parseFloat(prompt(`Enter the length of the rectangle: `));
          let b=parseFloat(prompt(`Enter the breadth of the rectangle: `));
          let area=l*b;
          console.log(`Area of the rectangle is ${area}`);
             }
              triangle(){
              let b=parseFloat(prompt(`Enter the base of the triangle: `));
              let h=parseFloat(prompt(`Enter the height of the triangle: `));
              let area=1/2*(b*h);
              console.log(`Area of the triangle is ${area}`);
                 }}
new Myclass();