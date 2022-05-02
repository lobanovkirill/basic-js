const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  if(!checkIcomeDataType(sampleActivity)) return false;

  const activity = Number(sampleActivity);
  if(!checkNumber(activity)) return false;
  
  const k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(
      (Math.log(MODERN_ACTIVITY / activity) / k)
    ) || false;

}

function checkIcomeDataType(data) {
  if(
    typeof data !== 'string' ||
    data === 'undefined' ||
    data === '' ||
    data === null
  ) { 
    return false
  } else {
    return true;
  }
}

function checkNumber(data) {
  if (data === 'NaN' ||
      0 > data       ||
      data > 15      ||
      data === 0
    ) {
      return false
  } else {
      return data;
  }
}

module.exports = {
  dateSample
};
