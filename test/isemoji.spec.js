require('../src/index')
const { expect } = require('chai')

describe('is emoji?', () => {
  it('empty string is not emoji', () => {
    expect(''.isemoji()).to.equal(false)
  })
  it('normal string is not emoji', () => {
    expect('test'.isemoji()).to.equal(false)
  })
  it('Dingbat ✅ is emoji', () => {
    expect('✅'.isemoji()).to.equal(true)
  })
  it('Regional_Indicator_Symbol 🇨🇳 is emoji', () => {
    expect('🇨🇳'.isemoji()).to.equal(true)
  })
  it('Miscellaneous_Symbols ☁ is emoji', () => {
    expect('☁'.isemoji()).to.equal(true)
  })
  it('Enclosed_CJK_Letters_and_Months ㊗︎ is emoji', () => {
    expect('㊗︎'.isemoji()).to.equal(true)
  })
  it('CJK_Symbols_and_Punctuation 〽️ is emoji', () => {
    expect('〽️'.isemoji()).to.equal(true)
  })
  it('Enclosed_Alphanumerics Ⓜ️ is emoji', () => {
    expect('Ⓜ️'.isemoji()).to.equal(true)
  })
  it('Enclosed_Alphanumeric_Supplement 🆒 is emoji', () => {
    expect('🆒'.isemoji()).to.equal(true)
  })
  it('Enclosed_Ideographic_Supplement 🈲 is emoji', () => {
    expect('🈲'.isemoji()).to.equal(true)
  })
  it('General_Punctuation ⁉️ is emoji', () => {
    expect('⁉️'.isemoji()).to.equal(true)
  })
  it('Geometric_Shapes ▶️ is emoji', () => {
    expect('▶️'.isemoji()).to.equal(true)
  })
  it('Latin-1_Supplement_(Unicode_block) ©️ is emoji', () => {
    expect('©️'.isemoji()).to.equal(true)
  })
  it('Latin-Letter_like_symbols ℹ️ is emoji', () => {
    expect('ℹ️'.isemoji()).to.equal(true)
  })
  it('Mahjong_tiles 🀄 is emoji', () => {
    expect('🀄'.isemoji()).to.equal(true)
  })
  it('Miscellaneous_Symbols_and_Arrows ⭐️ is emoji', () => {
    expect('⭐️'.isemoji()).to.equal(true)
  })
  it('Miscellaneous_Technical ⌛️ is emoji', () => {
    expect('⌛'.isemoji()).to.equal(true)
  })
  it('Playing_cards_in_Unicode ♥️ is emoji', () => {
    expect('♥'.isemoji()).to.equal(true)
  })
  it('Supplemental_Arrows ⤴️️ is emoji', () => {
    expect('⤴️'.isemoji()).to.equal(true)
  })
  it('Arrows_(Unicode_block) ↖️️ is emoji', () => {
    expect('↖️'.isemoji()).to.equal(true)
  })
})
