const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }

  return arr.reduce((acc, item, index, arr) => {

    if (arr[index - 1] === '--discard-next' && arr[index + 1] === '--double-prev' ) {
      return acc;
    } else if (arr[index - 1] === '--double-next' && arr[index + 1] === '--double-prev') {
      return [...acc, item, item, item];
    } else if (arr[index - 1] === '--discard-next' && arr[index + 1] === '--discard-prev') {
      return acc;
    } else if (arr[index - 1] === '--double-next' && arr[index + 1] === '--discard-prev') {
      return [...acc, item];
    }


    if (arr[index - 1] === '--discard-next' || arr[index + 1] === '--discard-prev') {
      return acc;
    } else if (arr[index - 1] === '--double-next' || arr[index + 1] === '--double-prev') {
      return [...acc, item, item];
    } else if (item !== '--discard-next' && item !== '--discard-prev' && item !== '--double-next' && item !== '--double-prev' ) {
      return [...acc, item];
    } else {
      return acc;
    }
  }, [])
}

module.exports = {
  transform
};
