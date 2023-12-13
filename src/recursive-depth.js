const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth, res) {
    if (typeof depth === 'undefined') {
      depth = {};
      res = {};
      depth.value = 0;
      res.value = 0;
    }
    if (Array.isArray(arr)) {
      depth.value++;
      if (res.value < depth.value) res.value = depth.value;
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          this.calculateDepth(arr[i], depth, res);
        }
      }
      depth.value--;
    }
    return res.value;
  }
  calculateDepth1(arr, depth) {
    if (Array.isArray(arr)) {
      depth++;
      if (depth > this.res) this.res = depth;
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          depth = this.calculateDepth1(arr[i], depth);
        }
      }
      depth--;
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
