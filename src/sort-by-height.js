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
  const copyArr = [...arr];
  const tempArr = copyArr.filter(val => val !== -1).sort((a, b) => a - b);
  
  arr.forEach((val, idx) => {
    if(val !== -1) {
      copyArr[idx] = tempArr[0];
      tempArr.shift();
    }
  });

  return copyArr;
}

module.exports = {
  sortByHeight
};
