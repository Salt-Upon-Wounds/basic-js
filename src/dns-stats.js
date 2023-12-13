const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  for (let j = 0; j < domains.length; j++) {
    let arr = domains[j].split('.').reverse();
    let name = '';
    for (let i = 0; i < arr.length; i++) {
      name = name.concat(`.${arr[i]}`);
      if (typeof res[name] !== "undefined") {
        res[name]++;
      } else {
        res[name] = 1;
      }
    }
  }
  return res;
}

module.exports = {
  getDNSStats
};
