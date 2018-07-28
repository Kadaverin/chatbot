const questionTypes = require('./questionTypes');
const regExps = require('./regularExpressions');

const questionTesters = [
  {
    type: questionTypes.WEATHER,
    regExp: regExps.WEATHER_REGEXP
  },
  {
    type: questionTypes.MONEY_EXCHANGE,
    regExp: regExps.MONEY_EXCHANGE_REGEXP
  },
  {
    type: questionTypes.ADVICE,
    regExp: regExps.ADVICE_REGEXP
  },
  {
    type: questionTypes.QUOTE,
    regExp: regExps.QUOTE_REGEXP
  },
  {
    type: questionTypes.SHOW_NOTE_LIST,
    regExp: regExps.SHOW_NOTE_LIST_REGEXP
  },
  {
    type: questionTypes.SAVE_NOTE,
    regExp: regExps.SAVE_NOTE_REGEXP
  },
  {
    type: questionTypes.SHOW_NOTE,
    regExp: regExps.SHOW_NOTE_REGEXP
  },
  {
    type: questionTypes.DELETE_NOTE,
    regExp: regExps.DELETE_NOTE_REGEXP
  },
]

module.exports = questionTesters