const { NotImplementedError } = require('../extensions/index.js');


function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2 ** disksNumber - 1;
  const seconds = Math.floor(60 * 60 * turns / turnsSpeed);
  return {
    turns: turns,
    seconds: seconds
  }
}

module.exports = {
  calculateHanoi
};
