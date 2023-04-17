const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let res = 0;
  matrix.forEach(el => {
    if (el.includes('^^')) {
      el.forEach (x => {
        if (x === '^^') res++;
      });
    }
  });
  return res;
}

module.exports = {
  countCats
};
