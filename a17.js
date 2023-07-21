const prompt = require('prompt-sync')();
class Calculator {
  constructor() {
    let choice = parseFloat(prompt('Select an operation:\n1. Addition\n2. Subtraction\n3. Division\n4. Multiplication'));
    let a = parseFloat(prompt('Enter the first number: '));
    let b = parseFloat(prompt('Enter the second number: '));

    switch (choice) {
      case 1:
        this.addition(a, b);
        break;
      case 2:
        this.subtraction(a, b);
        break;
      case 3:
        this.division(a, b);
        break;
      case 4:
        this.multiplication(a, b);
        break;
      default:
        console.log('Invalid choice');
    }
  }

  addition(a, b) {
    let sum = a + b;
    console.log(`${a} + ${b} = ${sum}`);
  }

  subtraction(a, b) {
    let difference = a - b;
    console.log(`${a} - ${b} = ${difference}`);
  }

  division(a, b) {
    if (b !== 0) {
      let quotient = a / b;
      console.log(`${a} / ${b} = ${quotient}`);
    } else {
      console.log('Error: Division by zero');
    }
  }

  multiplication(a, b) {
    let product = a * b;
    console.log(`${a} * ${b} = ${product}`);
  }
}

new Calculator();
