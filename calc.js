'use strict';

const calcDisplay = document.querySelector('.calcDisplay');
let firstOpperand;
let secondOpperand;
let operator;
let mathArr = [];

const mathOperator = () => {
  if (
    firstOpperand != undefined &&
    (operator != undefined) & (secondOpperand != undefined)
  )
    switch (operator) {
      case '+':
        return (calcDisplay.value =
          parseFloat(firstOpperand) + parseFloat(secondOpperand));
        break;
      case '-':
        return (calcDisplay.value =
          parseFloat(firstOpperand) - parseFloat(secondOpperand));
        break;
      case '/':
        return (calcDisplay.value =
          parseFloat(firstOpperand) / parseFloat(secondOpperand));
        break;
      case '*':
        return (calcDisplay.value =
          parseFloat(firstOpperand) * parseFloat(secondOpperand));
    }
};

// Number Buttons
const numbers = document.querySelectorAll('.number');
for (let i = 0; i < numbers.length; i++) {
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

    if (firstOpperand === mathOperator && operator !== undefined) {
      calcDisplay.value = '';
      calcDisplay.value += numbers[i].value;
    }

    if (operator === undefined) {
      calcDisplay.value += numbers[i].value;
      firstOpperand = calcDisplay.value;
    } else if (firstOpperand !== undefined && operator != undefined) {
      calcDisplay.value += numbers[i].value;
      secondOpperand = calcDisplay.value;
    }

    console.log(firstOpperand, operator, secondOpperand);
  });
}

// Operator buttons
const operators = document.querySelectorAll('.operators');
for (let x = 0; x < operators.length; x++) {
  operators[x].addEventListener('click', () => {
    document.getElementById('divide').value = '/';
    document.getElementById('multiply').value = '*';
    document.getElementById('subtract').value = '-';
    document.getElementById('add').value = '+';
    operator = operators[x].value;
    calcDisplay.value = '';

    if (
      firstOpperand != undefined &&
      (operator != undefined) & (secondOpperand != undefined)
    ) {
      calcDisplay.value = '';
      mathOperator();
      firstOpperand = mathOperator();
      operator = operators[x].value;
    }

    console.log(firstOpperand, operator);
  });
}

// Equal Button
const equalBtn = document
  .querySelector('#equal')
  .addEventListener('click', () => {
    mathOperator();
    firstOpperand = mathOperator();
    secondOpperand = undefined;
    operator = undefined;
  });

// Clear Input
const clrBtn = document
  .querySelector('#clearBtn')
  .addEventListener('click', () => {
    calcDisplay.value = '';
    firstOpperand = undefined;
    secondOpperand = undefined;
    operator = undefined;
  });
