const QuotesRepository = require('../repositories/quotesRepository')

module.exports = {
  getRandomQuote : callback => {
    QuotesRepository.getRandomQuote( (err ,quote) => {
      callback(err , quote)
    })
  }
}
