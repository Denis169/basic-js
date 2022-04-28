const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let number = 0;
  let arrNumb = String(n).split('');

  for (let i = 0; i < arrNumb.length; i++) {
    if (Number([...arrNumb.slice(0, i), ...arrNumb.slice(i + 1)].join('')) > number ) {
      number = Number([...arrNumb.slice(0, i), ...arrNumb.slice(i + 1)].join(''));
    }
  }

  return number;
}

module.exports = {
  deleteDigit
};
