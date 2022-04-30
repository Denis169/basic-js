const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrForSort = [];
  const minusOneIndexArr = [];

  arr.forEach((item, index) => {
    if (item === -1) {
      minusOneIndexArr.push(index);
    } else {
      arrForSort.push(item)
    }
  })

  arrForSort.sort((a,b) => a - b);

  minusOneIndexArr.forEach((item) => {
    arrForSort = [...arrForSort.slice(0, item), -1 , ...arrForSort.slice(item)]
  })

  return arrForSort;
}

module.exports = {
  sortByHeight
};
