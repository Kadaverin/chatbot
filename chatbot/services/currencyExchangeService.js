const fetch = require("node-fetch");


module.exports = { 
  convertCurrency : (amount , currency , targetCurrency , callback) => {
    currency = currencyNameToAbbreviation[currency]
    targetCurrency  = currencyNameToAbbreviation[targetCurrency]
    const query = currency + '_' + targetCurrency;
    var url = 'https://free.currencyconverterapi.com/api/v6/convert?q=' + query + '&compact=ultra'

    fetch(url).then(res => {
      res.json().then(data => {
        let total = data[query] * amount
        callback(null , total)
      })
      })
      .catch(err => {
        callback(err)
      })

  }
}

const currencyNameToAbbreviation = {
  'dollar' : 'USD',
  'euro' : 'EUR',
  'hryvnia': 'UAH'
}
