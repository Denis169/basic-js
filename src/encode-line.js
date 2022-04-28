const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = [];
  const incommingMassive = str.split('');
  let lastItem = '';

  incommingMassive.forEach((item) => {
    if ( lastItem !== item) {
      arr.push(item);
    } else {
      if (arr[arr.length - 1] === item) {
        arr.pop();
        arr.push(`2${item}`);
      } else {
        let i = Number(arr[arr.length - 1].slice(0, -1));
        arr.pop();
        arr.push(`${i + 1}${item}`);
      }
    }
    lastItem = item;
  })

  return arr.join('');
}

module.exports = {
  encodeLine
};
