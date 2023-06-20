const add = require('clothiernamedjeremiah-package-one').add;
const multiply = require('clothiernamedjeremiah-package-two').multiply;

const num1 = 5;
const num2 = 6;

const sum = add(num1, num2);
const product = multiply(num1, num2);

console.log(`The sum of ${num1} + ${num2} is ${sum}`);
console.log(`The product of ${num1} x ${num2} is ${product}`);