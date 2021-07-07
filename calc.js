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


let mathArr = [];
 

// Display Numbers
zero.addEventListener('click', function(e)  {
  
  mathArr.push(this.value);
calcDisplay.value += this.value;
console.log(mathArr);

});

one.addEventListener('click', function(e) {
  
  one.value = 1;
  mathArr.push(this.value);
calcDisplay.value += this.value;
console.log(mathArr);
});

two.addEventListener('click', function() {
  two.value = 2;
  mathArr.push(this.value);
  calcDisplay.value += this.value;
  console.log(mathArr);

});

three.addEventListener('click', function() {
  three.value = 3;
  mathArr.push(this.value);
calcDisplay.value += this.value;
  
});

four.addEventListener('click', function()  {
  four.value = 4;
  mathArr.push(this.value);
calcDisplay.value += this.value;

});

five.addEventListener('click', function() {
  five.value = 5;
  mathArr.push(this.value);
calcDisplay.value += this.value;

});

six.addEventListener('click', function() {
  six.value = 6;
  mathArr.push(this.value);
  calcDisplay.value += this.value;
});

seven.addEventListener('click', function() {
  seven.value = 7;
  mathArr.push(this.value);
  calcDisplay.value += this.value;
});

eight.addEventListener('click', function() {
  eight.value = 8;
  mathArr.push(this.value);
  calcDisplay.value += this.value;
});

nine.addEventListener('click', function() {
  nine.value = 9;
  mathArr.push(this.value);
  calcDisplay.value += this.value;
});



// Create new variable function
// example const numbers = calcDisplay.value (operator) newVariable
// newVariable is then filled in by next number hit.



// Operators
decimal.addEventListener('click', () => {
 decimal.value = '.';
 mathArr.push(decimal.value);
 calcDisplay.value += decimal.value;
 console.log(mathArr);

  console.log('Test');
});

equal.addEventListener('click', () => {
  parseFloat(mathArr.value);
  eval(mathArr);
  calcDisplay.value = mathArr.value;

 
  

});

division.addEventListener('click', () => {
console.log('Test');


});

multiply.addEventListener('click', () => {

});

subtract.addEventListener('click', () => {

});

add.addEventListener('click', () => {
  calcDisplay.value = '';
  add.value = '+';
  mathArr.push(add.value);
  console.log(mathArr);
});






// Clear Input
clrBtn.addEventListener('click', () => {
  calcDisplay.value = '';
  mathArr = [];
  console.log(mathArr);
});






