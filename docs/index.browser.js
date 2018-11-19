// https://en.wikipedia.org/wiki/Dingbat
const rsDingbat = '[\\u2700-\\u27bf]'; // https://en.wikipedia.org/wiki/Regional_Indicator_Symbol

const rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
const rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
const keycap = '[\\u0023-\\u0039]\\ufe0f?\\u20e3'; // https://en.wikipedia.org/wiki/Miscellaneous_Symbols

const miscSymbols = '[\\u2600-\\u26FF]'; // https://en.wikipedia.org/wiki/Enclosed_CJK_Letters_and_Months

const cjkLettersAndMonths = ['\\u3299', '\\u3297']; // https://en.wikipedia.org/wiki/CJK_Symbols_and_Punctuation

const cjkSymbolsAndPunctuation = ['\\u303d', '\\u3030']; // https://en.wikipedia.org/wiki/Enclosed_Alphanumerics

const enclosedAlphanumerics = ['\\u24c2']; // https://en.wikipedia.org/wiki/Enclosed_Alphanumeric_Supplement

const enclosedAlphanumericSupplement = ['\\ud83c[\\udd70-\\udd71]', '\\ud83c[\\udd7e-\\udd7f]', '\\ud83c\\udd8e', '\\ud83c[\\udd91-\\udd9a]', '\\ud83c[\\udde6-\\uddff]']; // https://en.wikipedia.org/wiki/Enclosed_Ideographic_Supplement

const enclosedIdeographicSupplement = ['[\\ud83c[\\ude01-\\ude02]', '\\ud83c\\ude1a', '\\ud83c\\ude2f', '[\\ud83c[\\ude32-\\ude3a]', '[\\ud83c[\\ude50-\\ude51]']; // https://en.wikipedia.org/wiki/General_Punctuation

const generalPunctuation = ['\\u203c', '\\u2049']; // https://en.wikipedia.org/wiki/Geometric_Shapes

const geometricShapes = ['[\\u25aa-\\u25ab]', '\\u25b6', '\\u25c0', '[\\u25fb-\\u25fe]']; // https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)

const latin1Supplement = ['\\u00a9', '\\u00ae']; // https://en.wikipedia.org/wiki/Letter_like_symbols

const letterLikeSymbols = ['\\u2122', '\\u2139']; // https://en.wikipedia.org/wiki/Mahjong_tiles

const mahjongTiles = ['\\ud83c\\udc04']; // https://en.wikipedia.org/wiki/Miscellaneous_Symbols_and_Arrows

const miscSymbolsAndArrows = ['\\u2b05', '\\u2b06', '\\u2b07', '\\u2b1b', '\\u2b1c', '\\u2b50', '\\u2b55']; // https://en.wikipedia.org/wiki/Miscellaneous_Technical

const miscTechnical = ['\\u231a', '\\u231b', '\\u2328', '\\u23cf', '[\\u23e9-\\u23f3]', '[\\u23f8-\\u23fa]']; // https://en.wikipedia.org/wiki/Playing_cards_in_Unicode

const playingCards = ['\\ud83c\\udccf']; // https://en.wikipedia.org/wiki/Supplemental_Arrows-B

const supplementalArrows = ['\\u2934', '\\u2935']; // https://en.wikipedia.org/wiki/Arrows_(Unicode_block)

const arrows = ['[\\u2190-\\u21ff]'];
const supplemental = [].concat(rsDingbat, rsRegional, rsSurrPair, keycap, cjkLettersAndMonths, cjkSymbolsAndPunctuation, enclosedAlphanumerics, enclosedAlphanumericSupplement, enclosedIdeographicSupplement, generalPunctuation, geometricShapes, latin1Supplement, letterLikeSymbols, mahjongTiles, miscSymbols, miscSymbolsAndArrows, miscTechnical, playingCards, supplementalArrows, arrows).join('|');

const regs = `(?:${supplemental})`;

const regx = new RegExp(regs);
const regRepl = new RegExp(regs, 'g');

const isemoji = function () {
  return regx.test(this);
};

String.prototype.isemoji = isemoji;

String.prototype.removeEmoji = function () {
  return this.replace(regRepl, '');
};
