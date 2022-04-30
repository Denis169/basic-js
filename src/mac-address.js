const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 * @param n
 */
function isMAC48Address(n) {
  const reg = /[^\d^A-F]/g
  return n.split('-').reduce((acc, item) => {
    if (reg.test(item)) {
      return false;
    }
    return acc;
  }, true)
}

module.exports = {
  isMAC48Address
};
