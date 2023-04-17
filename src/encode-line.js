const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str == '') return '';
  let arr = str.split('');
  let res = '';
  let tmp = 0;
  let ch = str[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ch) {
      tmp++;
    } else {
      if (tmp === 1) tmp = '';
      res += tmp + ch;
      ch = arr[i];
      tmp = 1;
    }
    if (i == arr.length - 1) {
      if (tmp === 1) tmp = '';
      res += tmp + ch;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
