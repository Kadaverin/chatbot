const fetch = require('node-fetch');

module.exports = {
  getWeatherForecast : (day , city , callback) => {
    const dayLowercase = day.toLowerCase();
    const dayNum = dayToNumberHash[dayLowercase]
    const currentDayNum = new Date().getDay();

    if (city == 'Kyiv'){ city = 'Kiev'} // Проблемы с апи, не находил по другому погоду по Киеву

    var url =  'http://api.apixu.com/v1/forecast.json?key=08733305e91447bf84272328182807&q=' + city + '&days=7'
    let index = currentDayNum - dayNum

    fetch(url).then(res => {
      res.json().then(data => {
        let forecast = data.forecast.forecastday[index]
        callback(null, forecast.day.condition.text, forecast.day.avgtemp_c)
      })
    })
    .catch(e => {
      callback(e.message)
    })  
  }
}


const dayToNumberHash = {
  'today': new Date().getDay(),
  'tomorrow': new Date().getDay() + 1,
  'on monday': 1,
  'on tuesday': 2,
  'on wednesday': 3,
  'on thursday': 4,
  'on friday': 5,
  'on sunday': 6,
  'on saturday': 0
}
