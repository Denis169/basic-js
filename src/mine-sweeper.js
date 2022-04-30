const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  const newArr = matrix.reduce((acc, item, index) => {
    acc.push(item.reduce((acc2, itemElem) => {
      acc2.push(0);
      return acc2
    },[]))
    return acc;
  },[])

  matrix.forEach((item, index) => {
    item.forEach((elem, indexElem) => {
      if ( index - 1 >= 0 && indexElem - 1 >= 0 && matrix[index - 1][indexElem - 1]) {
        newArr[index][indexElem] += 1;
      }
      if ( index - 1 >= 0 && matrix[index - 1][indexElem]) {
        newArr[index][indexElem] += 1;
      }
      if ( index - 1 >= 0 && indexElem + 1 <= item.length - 1 && matrix[index - 1][indexElem + 1]) {
        newArr[index][indexElem] += 1;
      }
      if ( indexElem - 1 >= 0 && matrix[index][indexElem - 1]) {
        newArr[index][indexElem] += 1;
      }
      if (indexElem + 1 <= item.length - 1 && matrix[index][indexElem + 1]) {
        newArr[index][indexElem] += 1;
      }
      if ( index + 1 <= matrix.length - 1 && indexElem - 1 >= 0 && matrix[index + 1][indexElem - 1]) {
        newArr[index][indexElem] += 1;
      }
      if ( index + 1 <= matrix.length - 1 && matrix[index + 1][indexElem]) {
        newArr[index][indexElem] += 1;
      }
      if ( index + 1 <= matrix.length - 1 && indexElem + 1 <= item.length - 1 && matrix[index + 1][indexElem + 1]) {
        newArr[index][indexElem] += 1;
      }
    })
  })

  return newArr;
}

module.exports = {
  minesweeper
};
