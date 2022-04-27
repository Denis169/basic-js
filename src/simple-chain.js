const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  arrChain: [],
  valueChain: '',

  getLength() {
    return this.arrChain.length;
  },

  addLink(value) {
    this.arrChain.push(`( ${value === undefined ? '' : String(value)} )`);
    return this;
  },

  removeLink(position) {
    if (typeof(position) === 'number' && position % 1 === 0 && position <= this.arrChain.length && !(position < 1) ) {
      this.arrChain = [...this.arrChain.slice(0, position - 1), ...this.arrChain.slice(position)];
      return this;
    } else {
      this.arrChain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
  },

  reverseChain() {
    this.arrChain.reverse();
    return this;
  },

  finishChain() {
    this.valueChain = this.arrChain.join('~~');
    this.arrChain = [];
    return this.valueChain;
  }
};

module.exports = {
  chainMaker
};
