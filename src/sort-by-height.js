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
  let sorted = [...arr].sort((a, b) => a - b).filter(el => el != -1);
  let res = [];
  for (let i = 0, j = 0; i < arr.length; i++) {
    if (arr[i] == -1) res.push(arr[i]);
    else {
      res.push(sorted[j]);
      j++;
    }
  }
  return res;
}

module.exports = {
  sortByHeight
};
