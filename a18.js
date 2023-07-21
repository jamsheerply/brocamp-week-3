const prompt = require('prompt-sync')();
console.log('enter the score of');
let written_test=parseFloat(prompt('written test :'));
let lab_exam=parseFloat(prompt('lab exams:'));
let assignment=parseFloat(prompt('assignments :'));
let overall=((written_test*70)/100+(lab_exam*20)/100+(assignment*10)/100);
console.log(`your grade is ${overall}`);