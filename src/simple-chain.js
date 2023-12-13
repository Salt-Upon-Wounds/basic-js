const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  str: '',
  getLength() {
    return this.str.split('~~').length;
  },
  addLink(value) {
    if (this.str == '') this.str = `( ${value} )`;
    else {
      let tmp = this.str.split('~~');
      tmp.push(`( ${value} )`);
      this.str = tmp.join('~~');
    }
    return this;
  },
  removeLink(position) {
    let tmp = this.str.split('~~');
    if (typeof tmp[position - 1] === 'undefined') {
      this.str = '';
      throw new Error("You can't remove incorrect link!");
    }
    tmp.splice(position - 1, 1);
    this.str = tmp.join('~~');
    return this;
  },
  reverseChain() {
    this.str = this.str.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    let str = this.str;
    this.str = '';
    return str;
  }
};

module.exports = {
  chainMaker
};
