const CurrencyExchangeService = require('../services/currencyExchangeService');

class CurrencyExchangeController {
  convertCurrency(amount , currency, targetCurrency , resolve) {
    CurrencyExchangeService.convertCurrency(amount , currency, targetCurrency , (err, resAmount) => {
      if(err) return resolve(`Никакой пользы от этономического, говорили мне в дантисты подаваться!`)
      resolve(`${amount} ${currency} = ${resAmount} ${targetCurrency}`)
    })
  }
}

module.exports = new CurrencyExchangeController();