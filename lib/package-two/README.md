# clothiernamedjeremiah-package-two

## Installation

```sh
npm install clothiernamedjeremiah-package-two
```

## Entry Points

There is no single entry point. You can only import individual top-level modules.

### `multiply(x: number, y:number): number`

Multiply two numbers together.

```ts
const multiply = require('clothiernamedjeremiah-package-two').multiply;

const num1 = 5;
const num2 = 6;

const product = multiply(num1, num2);

console.log(`The product of ${num1} x ${num2} is ${product}`);
```
