/**
 * Adds two numbers together
 *
 * @param {number} num1
 * @param {number} num2
 * @returns the sum of two numbers
 */
function add(num1, num2) {
  if (typeof num1 !== 'number' && typeof num2 !== 'number') {
    throw new TypeError('Invalid input! Expected both parameters to be of type "number"');
  }
  return num1 + num2;
}

module.exports = {
  add,
};
