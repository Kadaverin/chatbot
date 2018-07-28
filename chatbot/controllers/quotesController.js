const QuotesService = require('../services/quotesService');

class QuotesController{
  showRandomQuote(resolve){
    QuotesService.getRandomQuote( (err , quote ) => {
      if (err) return resolve(`Еще пара ошибок и я начну убивать людей`)
      resolve(quote)
    })
  }
}

module.exports = new QuotesController()