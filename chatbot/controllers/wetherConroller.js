const WeatherService = require('../services/weatherService');

class WeatherController {
  getWeatherForecast(day, city, resolve){
    WeatherService.getWeatherForecast(day, city , (err, text, avrTemp) => {
      if (err) return resolve('Мои шаманы что-то притихли, приходи в другой раз')
      resolve(`Weather in ${city} ${day}:\n ${text}. \n Average temperature: ${avrTemp} celsia`)
    })
  } 
}

module.exports = new WeatherController();