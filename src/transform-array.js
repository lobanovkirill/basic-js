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
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  let resultArr = [];

  let i = 0;
  while(i < arr.length) {

    if(arr[i] === '--double-next') {

      resultArr.push(arr[i + 1]);

    } else if(arr[i] === '--double-prev') {

      if(arr[i - 2] !== '--discard-next') {

        resultArr.push(arr[i - 1]);

      }

    } else if(arr[i] === '--discard-next'){

      i = i + 2;

    } else if(arr[i] === '--discard-prev') {

      if(arr[i - 2] !== '--discard-next') {

        resultArr.pop();

      }

    } else {

      resultArr.push(arr[i]);

    }

    i++;

  }
  
  return resultArr.filter(value => typeof value !== 'undefined');
}

module.exports = {
  transform
};
