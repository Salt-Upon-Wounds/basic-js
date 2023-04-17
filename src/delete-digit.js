const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = Number.MIN_SAFE_INTEGER;
  let str = n.toString();
  for (let i = 0; i< str.length; i++) {
    let tmp = str.split('');
    tmp[i] = '';
    tmp = parseInt(tmp.join(''));
    if (res < tmp) res = tmp;
  }
  return res;
}

module.exports = {
  deleteDigit
};
