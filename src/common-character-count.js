const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

  let arrStr1 = s1.split("");
  let arrStr2 = s2.split("");
  let tempArr = [];

  for(let i of arrStr1) {
    if(arrStr2.includes(i)) {
      tempArr.push(i);
      let idx = arrStr2.indexOf(i);
      if(idx !== -1) arrStr2.splice(idx, 1);
    }
  }
  return tempArr.length;
}

module.exports = {
  getCommonCharacterCount
};
