# clothiernamedjeremiah-package-one

## Installation

```sh
npm install clothiernamedjeremiah-package-one
```

## Entry Points

There is no single entry point. You can only import individual top-level modules.

### `add(x: number, y:number): number`

Adds two numbers together.

```ts
const add = require('clothiernamedjeremiah-package-one').add;

const num1 = 5;
const num2 = 6;

const sum = add(num1, num2);

console.log(`The sum of ${num1} + ${num2} is ${sum}`);
```
