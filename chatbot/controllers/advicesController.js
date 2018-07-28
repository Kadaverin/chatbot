const AdvicesService = require('../services/advicesService');

class AdvicesController{
  showRandomAdvice(resolve){
    AdvicesService.getRandomAdvice( (err , advice) => {
      if(err) return resolve('Не хочет мир, чтобы ты получил советов. Во всем вини роботов')
      resolve(advice)
    })
  }
}

module.exports = new AdvicesController();