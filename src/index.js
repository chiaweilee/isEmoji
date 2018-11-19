const regx = require('./emoji-regx')

const isemoji = function () {
  return regx.test(this)
}

String.prototype.isemoji = isemoji

module.exports = isemoji
