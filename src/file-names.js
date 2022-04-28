const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const objFiles = {};
  let count = 0;
  const finishArr = [];

  names.forEach((item, index) => {
    if (objFiles[`${item}`]) {
      objFiles[`${item}`].amount +=1;
      objFiles[`${item}`].index.push(index);
      count++;
    } else {
      objFiles[`${item}`] = {amount: 1, index: [index]};
      count++;
    }
  })

  for (let i = 0; i < count; i++) {
    for (let key in objFiles) {
      if (objFiles[`${key}`].index.includes(i)) {
        let itemPush = `${key}(${objFiles[`${key}`].amount - objFiles[`${key}`].index.length})`;
        if (objFiles[`${key}`].amount - objFiles[`${key}`].index.length === 0) {
          if (finishArr.includes(`${key}`)) {
            finishArr.push(`${key}(${objFiles[`${key}`].amount - objFiles[`${key}`].index.length + 1})`)
          } else {
            finishArr.push(`${key}`)
          }
        } else {
          finishArr.push(itemPush);
        }
        let deletedIndex = objFiles[`${key}`].index.indexOf(i);
        objFiles[`${key}`].index = [...objFiles[`${key}`].index.slice(0, deletedIndex),...objFiles[`${key}`].index.slice(deletedIndex + 1)]
      }
    }
  }

  return finishArr;

}

module.exports = {
  renameFiles
};
