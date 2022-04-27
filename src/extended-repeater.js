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
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  this.finishString = '';
  this.str = String(str);
  this.addition = String(options.addition);
  this.repeat = options.repeatTimes ? options.repeatTimes : 1;
  this.additionRepeat = (options.additionRepeatTimes ? options.additionRepeatTimes : 1);

  for (let i = 0; i < this.repeat; i++) {
    this.finishString += this.str;

    if (options.addition || options.addition === false || options.addition === null) {
      for (let j = 0; j < this.additionRepeat; j++) {
        if (j !== this.additionRepeat - 1) {
          this.finishString += this.addition + (options.additionSeparator ? options.additionSeparator : '|');
        } else {
          this.finishString += this.addition;
        }
      }
    }

    if (i !== this.repeat - 1) {
      this.finishString += (options.separator ? options.separator : '+');
    }
  }

  return this.finishString;
}

module.exports = {
  repeater
};
