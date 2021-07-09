'use strict';

const calcDisplay = document.querySelector('.calcDisplay');



let firstOpperand;
let secondOpperand;
let operator;
let mathArr = [];
 

// Numbers

// one.addEventListener('click', () =>{
//    one.value = 1;
//    mathArr.push(one.value);
//    calcDisplay.value = one.value;
//    console.log(mathArr);
// });




// Notes
// Digits in own category
// Operator buttons
// Single equal button
// Group each group together in event listener


const numbers = document.querySelectorAll('.number')
for(let i = 0; i < numbers.length; i++){
  numbers[i].addEventListener('click', () => {
    numbers[i].value = i;

  
    mathArr.push(numbers[i].value);
    calcDisplay.value = numbers[i].value;
    console.log(mathArr);
   
  });
}

 const operators = document.querySelectorAll('.operators')
 for(let x = 0; x < operators.length; x++){
   operators[x].addEventListener('click', () => {
    //  console.log('Operator Test');
   });
 }

 const equalBtn = document.querySelector('#equal').addEventListener('click', () => {
   console.log('Equal Test');
     parseFloat(mathArr.value);
  firstOpperand = parseFloat(mathArr[0]);
  secondOpperand = parseFloat(mathArr[2]);
  operator = mathArr[1];
  
//   switch(operator) {
//     case '+':
//      return firstOpperand + secondOpperand;
//       break;
//     case '-': 
//      return firstOpperand - secondOpperand;
//       break;
//     case '/':
//      return firstOpperand / secondOpperand;
//       break;
//     case '*':
//      return firstOpperand * secondOpperand;
//   }
  const results = a;
  calcDisplay.value = mathArr;
  // console.log(mathArr);
 });



// Clear Input
const clrBtn = document.querySelector('#clearBtn').addEventListener('click', () => {
  calcDisplay.value = '';
  mathArr = [];
  // console.log('Cleared', mathArr);
});






