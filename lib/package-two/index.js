/**
 * Multiplies two numbers together
 *
 * @param {number} num1
 * @param {number} num2
 * @returns the product of two numbers
 */
function multiply(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    console.log('you made a mistake');
    throw new TypeError('Invalid input! Expected both parameters to be of type "number"');
  }
  return num1 * num2;
}

module.exports = {
  multiply,
};
