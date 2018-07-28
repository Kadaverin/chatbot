const questionTypes = require('../constants/questionTypes');
const NotesController = require('../controllers/notesController');
const QuotesController = require('../controllers/quotesController');
const AdvicesController = require('../controllers/advicesController');
const WeatherController = require('../controllers/wetherConroller');
const CurrencyExchangeController = require('../controllers/currencyExchangeController');

module.exports = {

  [questionTypes.SAVE_NOTE]: NotesController.addNote,
  [questionTypes.SHOW_NOTE]: NotesController.showNote,
  [questionTypes.DELETE_NOTE]: NotesController.deleteNote,
  [questionTypes.SHOW_NOTE_LIST]: NotesController.showNotelist,
  [questionTypes.QUOTE]: QuotesController.showRandomQuote,
  [questionTypes.ADVICE]: AdvicesController.showRandomAdvice,
  [questionTypes.WEATHER]: WeatherController.getWeatherForecast,
  [questionTypes.MONEY_EXCHANGE]: CurrencyExchangeController.convertCurrency,

}