const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRING PLUS 00 PLUS 00 PLUS ** STRINGPLUS00PLUS00PLUS ** STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!('separator' in options)) options['separator'] = '+';
  if (!('additionSeparator' in options)) options['additionSeparator'] = '|';
  if (!('addition' in options)) options['addition'] = '';

  let arr = str + new Array(options['additionRepeatTimes']).fill(String(options['addition'])).join(options['additionSeparator']);
  return new Array(options['repeatTimes']).fill(arr).join(options['separator']);
}

module.exports = {
  repeater
};
