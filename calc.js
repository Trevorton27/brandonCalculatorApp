'use strict';

const calcDisplay = document.querySelector('.calcDisplay');
let firstOpperand;
let secondOpperand;
let operator;
let mathArr = [];
let mathArr2 = [];

const mathOperator = () => {
  firstOpperand = parseFloat(mathArr[0]); 
  secondOpperand = parseFloat(mathArr[2]);
  operator = mathArr[1];

  switch(operator) {
    case '+':
     return calcDisplay.value = firstOpperand + secondOpperand;
      break;
    case '-': 
     return calcDisplay.value =  firstOpperand - secondOpperand;
      break;
    case '/':
     return calcDisplay.value =  firstOpperand / secondOpperand;
      break;
    case '*':
     return  calcDisplay.value =  firstOpperand * secondOpperand;
  }
};

// Number Buttons
const numbers = document.querySelectorAll('.number')
for(let i = 0; i < numbers.length; i++){
  numbers[i].addEventListener('click', () => {

  document.getElementById('zero').value = 0;
  document.getElementById('one').value = 1;
  document.getElementById('two').value = 2;
  document.getElementById('three').value = 3;
  document.getElementById('four').value = 4;
  document.getElementById('five').value = 5;
  document.getElementById('six').value = 6;
  document.getElementById('seven').value = 7;
  document.getElementById('eight').value = 8;
  document.getElementById('nine').value = 9;
  document.getElementById('decimal').value = '.';

  mathArr.push(numbers[i].value);
  calcDisplay.value += numbers[i].value;
  // calcDisplay.value = mathArr[0];
  // mathArr.splice(1);
 
  if(mathArr !== '' && operator !== '') {
    // calcDisplay.value = '';
    mathArr2.push(numbers[i].value);
    mathArr2.splice(0);
    mathArr2[0] = calcDisplay.value;
    mathArr.splice(2);
    mathArr = mathArr.concat(mathArr2);
  }

  console.log(mathArr);
  });
}

// Operator buttons
 const operators = document.querySelectorAll('.operators')
 for(let x = 0; x < operators.length; x++){
   operators[x].addEventListener('click', () => {
     mathOperator();
     mathArr.splice(1)
     mathArr[0] = calcDisplay.value;
     calcDisplay.value = '';

    document.getElementById('divide').value = '/';
    document.getElementById('multiply').value = '*';
    document.getElementById('subtract').value = '-';
    document.getElementById('add').value = '+';
    mathArr.push(operators[x].value);


   
    console.log(mathArr);
   });
 }


// Equal Button
 const equalBtn = document.querySelector('#equal').addEventListener('click', () => {
   mathOperator();
 });

// Clear Input
const clrBtn = document.querySelector('#clearBtn').addEventListener('click', () => {
  calcDisplay.value = '';
  mathArr = [];
});








