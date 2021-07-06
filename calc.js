'use strict';


const clrBtn = document.querySelector('#clearBtn');
const calcDisplay = document.querySelector('.calcDisplay');
// Numbers
const numbers = document.querySelectorAll('.number');
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
// PEMDAS
const decimal = document.querySelector('#decimal');
const equal = document.querySelector('#equal');
const division = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const subtract = document.querySelector('#subtract');
const add = document.querySelector('#add');





// Display Numbers
zero.addEventListener('click', () => {
  zero.value = 0;
calcDisplay.value += zero.value;
});

one.addEventListener('click', () => {
  one.value = 1;
calcDisplay.value += one.value;
});

two.addEventListener('click', () => {
  two.value = 2;
calcDisplay.value += two.value;
});

three.addEventListener('click', () => {
  three.value = 3;
  calcDisplay.value += three.value;
});

four.addEventListener('click', () => {
  four.value = 4;
calcDisplay.value += four.value;
});

five.addEventListener('click', () => {
  five.value = 5;
calcDisplay.value += five.value;
});

six.addEventListener('click', () => {
  six.value = 6;
calcDisplay.value += six.value;
});

seven.addEventListener('click', () => {
  seven.value = 7;
calcDisplay.value += seven.value;
});

eight.addEventListener('click', () => {
  eight.value = 8;
calcDisplay.value += eight.value;
});

nine.addEventListener('click', () => {
  nine.value = 9;
calcDisplay.value += nine.value;
});




// Operators
decimal.addEventListener('click', () => {
 console.log('hi');
});

equal.addEventListener('click', () => {

});

division.addEventListener('click', () => {

});

multiply.addEventListener('click', () => {

});

subtract.addEventListener('click', () => {

});

add.addEventListener('click', () => {

});






// Clear Input
clrBtn.addEventListener('click', () => {
  calcDisplay.value = '';
});






