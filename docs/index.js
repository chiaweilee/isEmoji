const regs = require('./emoji-regx');

const regx = new RegExp(regs);
const regRepl = new RegExp(regs, 'g');

const isemoji = function () {
  return regx.test(this);
};

String.prototype.isemoji = isemoji;

String.prototype.removeEmoji = function () {
  return this.replace(regRepl, '');
};

module.exports = isemoji;